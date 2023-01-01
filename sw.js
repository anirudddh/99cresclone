// For cache bursting change version number only, no need to rename sw.js file
// Only right ES5 code in this file

var version = 'v1';

self.addEventListener('install', function (event) {
  console.log(version + ' service worker version is insatlling...');
  //self.skipWaiting() prevents the waiting, meaning the service worker activates as soon as it's finished installing.
  //This means some of your page's fetches will have been handled by your old service worker,
  // but your new service worker will be handling subsequent fetches.
  //If this might break things, don't use skipWaiting().
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log(version + ' service worker version now ready to handle fetches!');
  //You can take control of uncontrolled clients by calling clients.claim()
  // within your service worker once it's activated.
  self.clients.claim();
});

self.addEventListener('push', function (event) {
  var dataFromPush = JSON.parse(event.data.text());
  const title = dataFromPush.title;
  var actions = dataFromPush.actions ? JSON.parse(dataFromPush.actions) : [];
  var data = dataFromPush.data ? JSON.parse(dataFromPush.data) : {};
  const options = {
    body: dataFromPush.body,
    data: { url: data.url, actions: actions, nwsUrl: dataFromPush.nwsUrl },
    icon: dataFromPush.icon,
    image: dataFromPush.image,
    badge: dataFromPush.badge,
    actions: actions,

    requireInteraction: dataFromPush.requireInteraction,
  };
  event.waitUntil(self.registration.showNotification(title, options));
  var receivedNotificationUrl =
    dataFromPush.nwsUrl + '&status=UNREAD&receivedAt=' + new Date().getTime();
  fetch(receivedNotificationUrl);
});

self.addEventListener('notificationclick', function (event) {
  var redirectUrl = '';
  if (event.action) {
    var index = event.notification.data.actions.findIndex(function (actionItem) {
      return actionItem.action == event.action;
    });
    redirectUrl = event.notification.data.actions[index].link;
  } else {
    redirectUrl = event.notification.data.url;
  }
  event.notification.close();
  event.waitUntil(clients.openWindow(redirectUrl));
  var openedNotificationUrl =
    event.notification.data.nwsUrl + '&status=READ&openedAt=' + new Date().getTime();
  fetch(openedNotificationUrl);
});

self.addEventListener('fetch', function (event) {
  // Handle images
  if (/\.jpg$|.jpeg$|.png$/.test(event.request.url)) {
    return handlePropertyImages(event);
  }
});

var isWebpSupported = (function () {
  var isSupported;
  return function (headers) {
    if (typeof isSupported !== 'undefined') {
      return isSupported;
    } else {
      isSupported = headers.has('accept') && headers.get('accept').includes('webp');
      return isSupported;
    }
  };
})();

function handlePropertyImages(event) {
  var request = event.request;
  // Is WebpSupported on browser
  if (isWebpSupported(request.headers)) {
    var newRequestUrl;
    var liveMediaServieUrl = 'mediacdn.99acres.com';
    var sanityMediaServiceUrl = 'cloud-99.infoedge.com';

    // check is property images url on production/staging
    if (
      location.hostname === 'www.99acres.com' &&
      liveMediaServieUrl.indexOf(new URL(request.url).hostname) >= 0
    ) {
      newRequestUrl = request.url.substr(0, request.url.lastIndexOf('.')) + '.webp';
      newRequestUrl = newRequestUrl.replace(liveMediaServieUrl, 'imagecdn.99acres.com');
    } else if (
      location.hostname !== 'www.99acres.com' &&
      sanityMediaServiceUrl.indexOf(new URL(request.url).hostname) >= 0
    ) {
      // check is property images url on sanity/dev
      newRequestUrl = request.url.substr(0, request.url.lastIndexOf('.')) + '.webp';
      newRequestUrl = newRequestUrl.replace(sanityMediaServiceUrl, 'aws-99.infoedge.com');
    } else {
      // Don't handle other urls
      return;
    }

    event.respondWith(
      fetch(newRequestUrl, {
        ...request,
        mode: 'cors', // For opaque response, and cross browser
        credentials: 'omit', // Response Accept header '*'can't be used as cors request x
      })
        .then(response => {
          //status 200 or 304
          if (response.ok || response.status === 304) {
            // webp image
            return response;
          }

          //Fallback,
          throw new Error('webp image not present through SW - ' + newRequestUrl);
        })
        .catch(err => {
          //Any network error or unsuccessfull response
          console.warn(err);
          // FALLBACK, Fetch original request
          return fetch(request, {
            mode: 'cors',
            credentials: 'omit',
          });
        })
    );
  }
  return;
}

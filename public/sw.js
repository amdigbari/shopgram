import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { NetworkFirst } from 'workbox-strategies';

registerRoute(/^https?.*/, new NetworkFirst({ cacheName: 'offline-cache' }));

precacheAndRoute(self.__WB_MANIFEST);

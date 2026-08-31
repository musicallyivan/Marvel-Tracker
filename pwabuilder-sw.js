importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.setConfig({ debug: false });

workbox.precaching.precacheAndRoute([
  { url: './', revision: '1' },
  { url: './index.html', revision: '1' },
  { url: './styles.css', revision: '1' },
  { url: './modern.css', revision: '1' },
  { url: './overrides.css', revision: '1' },
  { url: './app.js', revision: '1' },
  { url: './privacidad.html', revision: '1' },
  { url: './terminos.html', revision: '1' },
  { url: './cookies.html', revision: '1' },
  { url: './manifest.webmanifest', revision: '1' }
]);

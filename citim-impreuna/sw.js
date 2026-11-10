// Mută și instalările vechi către adresa unică a aplicației.
const APP_URL = "https://talantul-in-negot.github.io/citim-impreuna/";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.allSettled(windows
      .filter((client) => client.url.startsWith(self.registration.scope))
      .map((client) => client.navigate(APP_URL)));
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter((name) => name.startsWith("citim-impreuna-"))
      .map((name) => caches.delete(name)));
    await self.registration.unregister();
  })());
});
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate" && event.request.url.startsWith(self.registration.scope)) {
    event.respondWith(Response.redirect(APP_URL, 302));
  }
});

self.addEventListener("install", e => {
  console.log("Service Worker Installed");
  e.waitUntil(
    caches.open("dashboard-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

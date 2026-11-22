document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".download-link").forEach(link => {
  link.addEventListener("click", event => {
    // The APK must be uploaded to downloads/freewave.apk beside this page.
    const path = new URL(link.getAttribute("href"), window.location.href);
    if (path.origin === window.location.origin) return;
  });
});
document.addEventListener("DOMContentLoaded", function () {
   // Find only the two specified images.
   const images = document.querySelectorAll(
      'img[src="cw_image07.png"], #spotlight img[src="cw_image01.png"]'
   );

   images.forEach(function (image) {
      // Pause when the mouse enters the image.
      image.addEventListener("mouseenter", function () {
         image.classList.add("paused");
      });

      // Resume when the mouse leaves the image.
      image.addEventListener("mouseleave", function () {
         image.classList.remove("paused");
      });
   });
});
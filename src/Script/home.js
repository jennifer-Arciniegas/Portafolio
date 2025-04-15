// Funcionalidad para el menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle para mostrar/ocultar el menú móvil
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Cerrar el menú móvil cuando se hace clic en un enlace
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  // Cerrar el menú móvil cuando se hace scroll
  window.addEventListener("scroll", () => {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    }
  });
});

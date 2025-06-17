// Animação simples ao carregar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".regiao").forEach((sec, i) => {
    sec.style.opacity = 0;
    setTimeout(() => {
      sec.style.transition = "opacity 1s";
      sec.style.opacity = 1;
    }, 300 * i);
  });
});
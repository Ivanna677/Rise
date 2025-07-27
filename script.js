 const section = document.querySelector('.parallax-section');
  const ufo = document.querySelector('.parallax-layer.ufo');

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = 1 - rect.top / windowHeight; // от 0 до 1
      ufo.style.transform = `translateY(${progress * 100}px)`;
    }
  });

  // Проверяем, существует ли элементы на странице перед добавлением обработчиков
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Функция закрытия меню
    function closeMenu() {
        if (navLinks) {
            navLinks.classList.remove("show");
        }
        if (hamburger) {
            hamburger.classList.remove("active");
        }
    }

    // Открытие/закрытие меню по клику на гамбургер
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            hamburger.classList.toggle("active");
        });
    }

    // Закрытие меню при клике вне его области или на ссылку
    document.addEventListener("click", function (event) {
        if (!hamburger || !navLinks) return;

        // Если клик вне меню и не по гамбургеру — закрываем
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            closeMenu();
        }

        // Если клик по ссылке в меню — закрываем
        if (navLinks.contains(event.target) && event.target.tagName === "A") {
            closeMenu();
        }
    });
});

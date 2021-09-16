document.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.querySelector(".menuOpen");
  const menuClose = document.querySelector(".menuClose");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const menuItem = document.querySelector(".menu__item");
  const header = document.querySelector(".header");
  const mobile = document.querySelector(".mobile");

  if (!menuOpen || !menuClose) return;

  function styleToogle(width, overflow, op) {
    left.style.width = width;
    left.style.overflow = overflow;
    menuItem.style.opacity = op;
  }

  menuOpen.addEventListener("click", () => {
    styleToogle("260px", "auto", "1");
    menuOpen.classList.remove("is-active");
    menuClose.classList.add("is-active");
    header.classList.remove("header");
  });

  menuClose.addEventListener("click", () => {
    styleToogle("56px", "hidden", "0");
    menuClose.classList.remove("is-active");
    menuOpen.classList.add("is-active");
    header.classList.add("header");
  });

  mobile.addEventListener("click", () => {
    right.classList.add("tranlate");

    console.log("hihihihi");
  });
});

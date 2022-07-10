window.addEventListener("load", function () {
  const headerNav = document.querySelector(".header__nav");
  const btn = document.querySelector(".header__btn");

  function handleClick () {
headerNav.classList.toggle("show");
  }

  btn.addEventListener("click", handleClick);
});
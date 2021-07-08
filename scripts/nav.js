const nav = document.querySelector(".mobileNav")
const burger = document.querySelector(".hamburger")
const overlay = document.querySelector(".overlay")

burger.addEventListener("click", showMenu)

function showMenu() {
  nav.classList.toggle("active")
  overlay.classList.toggle("active")
  burger.classList.toggle("is-active")
}

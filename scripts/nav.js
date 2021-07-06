const nav = document.querySelector(".mobileNav")
const burger = document.querySelector(".burger")
const overlay = document.querySelector(".overlay")

burger.addEventListener("click", showMenu)

function showMenu() {
  nav.classList.toggle("active")
  overlay.classList.toggle("active")
}

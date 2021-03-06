const nav = document.querySelector(".mobileNav")
const burger = document.querySelector(".hamburger")
const overlay = document.querySelector(".overlay")

burger.addEventListener("click", showMenu)

function vis() {
  nav.classList.add("notVisible")
  overlay.classList.add("notVisible")
}

function showMenu() {
  if (nav.classList.contains("active")) {
    setTimeout(vis, 300)
  } else {
    nav.classList.remove("notVisible")
    overlay.classList.remove("notVisible")
  }

  nav.classList.toggle("active")
  overlay.classList.toggle("active")
  burger.classList.toggle("is-active")
}

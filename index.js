const closeNav = document.querySelector(".close-nav")
const nav = document.querySelector("header nav");
const toggleMenu = document.querySelector('.toggle-menu')

toggleMenu.addEventListener("click", showNav)
closeNav.addEventListener("click", hideNav)

function showNav() {
    nav.style.left = 0
}

function hideNav() {
    nav.style.left = "100%"
}
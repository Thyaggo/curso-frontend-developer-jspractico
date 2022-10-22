const menu = document.querySelector(".navbar-email");
const classInav = document.querySelector(".desktop-menu")
menu.addEventListener('click', eventToggle)

function eventToggle(){
    classInav.classList.toggle('inavtive')
}
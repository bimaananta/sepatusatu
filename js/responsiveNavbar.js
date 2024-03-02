const togglebtn = document.getElementById('burger');
const navUl = document.querySelector('nav ul');
const navUlLi = document.querySelectorAll('nav ul li');
let height = 0;
togglebtn.addEventListener('click', () => {
    navUl.classList.toggle('nav-ul-active');
    navbarAnimation();
    height = 0;
    console.log(window.innerWidth);
})

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        for (let i = 0; i < navUlLi.length; i++) {
            navUlLi[i].style.marginTop = "0px";
        }
    }
    else if (window.innerHeight < 768 && navUl.classList.contains('nav-ul-active')) {
        navbarAnimation();
    }
})
function navbarAnimation() {
    if (height !== 0) {
        height = 0;
    }
    for (let i = 1; i < navUlLi.length; i++) {
        navUlLi[i].style.marginTop = (height + 40) + "px";
        height += 40;
    }
}
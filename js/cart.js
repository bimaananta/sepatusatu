const addCart = document.querySelectorAll('#addToCart');
const cartImg = document.querySelectorAll('#addToCart img');
const textCont = document.querySelectorAll('#addToCart p a');
for (let i = 0; i < cartImg.length; i++) {
    addCart[i].style.display = "none";
    addCart[i].addEventListener('click', () => {
        console.log('pressed');
        cartImg[i].setAttribute('src', 'img/check-mark.png');
        cartImg[i].classList.add('adjust');
        textCont[i].innerHTML = "Added";
        textCont[i].style.fontSize = "15px";
    })
}
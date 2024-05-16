//Varibales
let menuBar = document.querySelector('.menu-bar');
let sideBar = document.querySelector('.sidebar');
let overLay = document.querySelector('.overlay');
let mockImage = document.querySelector('.img-mock');
let introImage = document.querySelector('.img-intro');
let list = document.querySelectorAll('.hide-sidebar');
let toggle = true;



// Functions
function toggleBar() {
    if (toggle) {
        menuBar.innerHTML = `<img  src="./images/icon-close.svg">`
        toggle = false;
        console.log('opened')
        sideBar.classList.add('toggle');
        overLay.classList.add('toggle');
        mockImage.style.display = 'none';
        document.body.style.overflow = 'hidden'
    } else {
        menuBar.innerHTML = `<img  src="./images/icon-hamburger.svg">`
        toggle = true;
        console.log('closed')
        sideBar.classList.remove('toggle');
        overLay.classList.remove('toggle');
        mockImage.style.display = 'block';
        document.body.style.overflow = 'auto'
        
    }

}
 

function backGround() {
    if (window.innerWidth < '376') {
        introImage.setAttribute('src', './images/bg-intro-mobile.svg')
        console.log("mobile responsived now")
    } else if (window.innerWidth > '376') {
        introImage.setAttribute('src', './images/bg-intro-desktop.svg')
        console.log('desktop responsive now')
    } else {
        console.log('something wrong')
    }
}
backGround();
window.addEventListener('resize', backGround)
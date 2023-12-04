const menu = document.querySelector('.header__menu');
const burgerBtn = document.querySelector('.header__burger');
const body = document.body;

if(menu && burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        burgerBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}



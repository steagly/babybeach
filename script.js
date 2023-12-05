const menu = document.querySelector('.header__menu');
const burgerBtn = document.querySelector('.header__burger');
const parent = document.querySelectorAll('.advantages-container')
const body = document.body;

if(menu && burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        burgerBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}

parent.forEach(block => {
    block.addEventListener('click', function() {
        hiddenBlock = this.querySelector('.exemple1')
        hiddenBlock.classList.toggle('slide')

        parent.forEach(nextBlock => {
            if (nextBlock !== block) {
                nextBlock.querySelector('.exemple1').classList.remove('slide');
            }
        });
    });
    
});



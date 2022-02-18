const iconMenu = document.querySelector('.burger');
if (iconMenu){
    const menuBody = document.querySelector('.header__nav');
    const burgerBody = document.querySelector('body');
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        burgerBody.classList.toggle('_active');
    });
}

const anchors = document.querySelectorAll('.header__nav--link[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
    });
}

const footers = document.querySelectorAll('.footer__nav--link[href*="#"]')

for (let footer of footers) {
    footer.addEventListener("click", function(event) {
        event.preventDefault();
        const blockId = footer.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
    });
}
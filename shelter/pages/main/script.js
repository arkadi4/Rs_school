let navLinks = document.querySelectorAll('.nav-link')
let navItems = document.querySelectorAll('.nav-item')
let navList = document.querySelector('.nav-list')
let navLink = document.querySelector('.nav-link')
let contentButton = document.querySelector('.content__button')
let petsButton = document.querySelector('.pets__button')
let slider = document.querySelector('.slider')
let sliderCards = document.querySelectorAll('.slider__card')
let sliderCardButtons = document.querySelectorAll('.slider__card__button')
const defaultLink = document.querySelector('.default-link')

navList.addEventListener('mouseover', (event) => {
        navItems.forEach(element => element.classList.remove('nav-item_selected'));
        navLinks.forEach(element => element.classList.remove('nav-link_selected'));
        if (event.target.classList.contains('nav-link')) {
            event.target.classList.add('nav-link_selected');
        }
})

navList.addEventListener('mouseleave', () => defaultLink.classList.add('nav-link_selected'))

contentButton.addEventListener('click', () => document.location='#pets')
petsButton.addEventListener('click', () => document.location='./../pets/index.html')

slider.addEventListener('mouseover', (event) => {
    sliderCards.forEach(element => element.classList.remove('slider__card_active'));
    sliderCardButtons.forEach(element => element.classList.remove('slider__card__button_active'));
    if (event.target.classList.contains('slider__card')) {
       event.target.classList.add('slider__card_active');
    }
    if (event.target.classList.contains('slider__card__button')) {
        event.target.classList.add('slider__card__button_active');
    } 
})
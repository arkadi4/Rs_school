const logo = document.querySelector('.logo')

logo.addEventListener('click', () => document.location='./../main/index.html')

const defaultLink = document.querySelector('.default-link')



let navLinks = document.querySelectorAll('.nav-link')
let navItems = document.querySelectorAll('.nav-item')
let navList = document.querySelector('.nav-list')
let navLink = document.querySelector('.nav-link')
let contentButton = document.querySelector('.content__button')
let cardsContainer = document.querySelector('.cards-container')
let cards = document.querySelectorAll('.card')
let cardButtons = document.querySelectorAll('.card__button')

navList.addEventListener('mouseover', (event) => {
         navItems.forEach(element => element.classList.remove('nav-item_selected'));
         navLinks.forEach(element => element.classList.remove('nav-link_selected'));
         if (event.target.classList.contains('nav-link')) {
            event.target.classList.add('nav-link_selected');
         }       
})

navList.addEventListener('mouseleave', () => defaultLink.classList.add('nav-link_selected'))

// contentButton.addEventListener('click', () => document.location='#pets')

cardsContainer.addEventListener('mouseover', (event) => {
    cards.forEach(element => element.classList.remove('card_active'));
    cardButtons.forEach(element => element.classList.remove('card__button_active'));
    if (event.target.classList.contains('card')) {
       event.target.classList.add('card_active');
    }
    if (event.target.classList.contains('card__button')) {
        event.target.classList.add('card__button_active');
    } 
})
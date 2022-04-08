let navLinks = document.querySelectorAll('.nav-item')
let navList = document.querySelector('.nav-list')

navList.addEventListener('mouseover', (event) => {
         navLinks.forEach(Element => Element.classList.remove('nav-item_selected'));
         event.target.classList.add('nav-item_selected');
})



// navLinks.forEach( (Element) => Element.addEventListener('mouseover', (event) => {
//     navLinks.forEach(Element => Element.classList.remove('nav-item_selected'))
//     event.target.classList.add('nav-item_selected')

//     console.log('event.target', event.target)
//     // source = `./assets/audio/${event.target.dataset.link}.mp3`;

//     // divImg.style.backgroundImage = `url(./assets/img/${event.target.dataset.link}.jpg)`;
//     // console.log('sourceImg', sourceImg)
// }))
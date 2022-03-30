// const url = 'https://type.fit/api/quotes';
// const divForText = document.querySelector('.div-for-text')
// const button = document.querySelector('.button')

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// const showData = (data) => {
//     console.log(data[0].text)
//     //const divForText = document.querySelector('.div-for-text')
//     const textP = document.createElement('p');
//     // for(elem of data) {
//     //     textP.textContent = `${elem.text}`
//     //     console.log(textP)
//     //     divForText.replaceWith(textP)
//     //     break
//     // }
//     textP.textContent = ''
//     textP.textContent = `${data[getRandomInt(0, data.length)].text}`
//     console.log('textP', textP)
//     //divForText.replaceWith(textP)
//     //divForText.remove(textP.previousSibling)
//     divForText.append(textP)
//     //setTimeout( () => divForText.remove(textP.previousSibling), 2000)
//     //if (divForText.childNodes >= 2) {divForText.remove(textP)}
// }

// async function getData() {
//     const res = await fetch(url);
//     const data = await res.json();
//     //console.log(data);
//     //console.log(data[0].text)
//     showData(data)
// }
// //getData();

// button.addEventListener('click', () => {getData()} )

// // const textP = document.createElement('p');
// // textP.textContent = `${showData(data)}`


// // const img = document.createElement('img');
// // img.classList.add('gallery-img')
// // img.src = `полученный от API адрес изображения`;
// // img.alt = `image`;
// // galleryContainer.append(img);



// const foo = bar();
// const number = 2;

// function bar() { return number;}

// let name = 'John';

// function printName() {
//     let name = "Peter";
//     console.log(name);
// }
// printName()

// for(var i = 0; i<10;i++) {
//     console.log(i)
// }
// console.log(i)

// function foo(a, b) {
//     return a * b;
// }
// const bar = foo.bind(null, 2)
// bar(2)

// var name = 'John'

// var user = {
//     name: "Peter",
//     printMessage() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// var printMessage = user.printMessage;
// printMessage();

// function printName() {
//     console.log(name)
// }

// setTimeout( () => {
//     let name= "Peter";
//     printName();
// }, 1000);

// "use strict";

// function getThis() {
//     return this;
// }

// console.log(getThis())

// let f = function g() { return 23;};

// console.log(typeof g())

// function foo() {console.log(this);}
// foo.call(null)

// for(var i=0;i<3;i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000)
// }

// console.log(message)
// var message = 'Hello'

// function getThis() {
//     return this;
// }

// console.log(getThis())

// const details = {
//     name: 'John!',
// }
// function getMessage(message) {
//     return `${message} ${this.name}`;
// }
// console.log(getMessage.apply(details, ['Hello']))

// var name = 'John';

// function printName() {
//     console.log(name)
//     var name = 'Peter';
//     console.log(name);
// }

// printName()

// for(let i=0;i<3;i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000)
// }

// console.log(message);
// let message = 'Hello';

// printMessage();

// function printMessage() {
//     console.log('Hello!');
// }

// "use strict";

// const details = {
//     message: 'Hello!',
// }
// function getMessage() {
//     return this.message;
// }

// console.log(getMessage.call(details))

// var a=1, b = function a(x) {x && a(--x); };
// console.log(a)

// function foo() {
//     console.log(arguments)
// }

// function foo() {
//     console.log(foo.getArguments());
// }
// foo()

// function foo() {
//     console.log(arguments);
// }
// foo()

(
    function(a) {
        arguments[0] = 10;
        return a;
    }
) (5);

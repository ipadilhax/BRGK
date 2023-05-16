console.log(window.screen.height);

console.log(document.getElementById("page").clientHeight)

let page = document.querySelector("page");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
// let screenFooter = (header.style.height + footer.style.height) - window.screen.height;
console.log(header.style.height)
console.log(footer.style.height)
console.log(page.style.height)
// console.log(screenFooter)
// page.style.height = screenFooter;
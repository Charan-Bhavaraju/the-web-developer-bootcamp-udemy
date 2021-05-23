let btn = document.querySelector('#btn');
let mainBody = document.querySelector('body');
let h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
    mainBody.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

})
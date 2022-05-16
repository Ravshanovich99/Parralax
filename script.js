const cursor = document.querySelector('.cursor')
const cursorInner = document.querySelector('.cursor-inner')
const parallax = document.querySelector('.parallax')
const images = parallax.querySelectorAll('.parallax img')
const title = parallax.querySelector('h1')


parallax.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    cursorInner.style.left = x + 'px'
    cursorInner.style.top = y + 'px'

    let winX = window.innerWidth
    let winY = window.innerHeight

    let corX = winX / 2 - x
    let corY = winY / 2 - y

    images[0].style.transform = `translate(${corX / 25}px, ${-corY / 20}px)`
    images[1].style.transform = `translate(${corX / 35}px, ${-corY / 29}px)`
    images[2].style.transform = `translate(${corX / 25}px, ${corY / 20}px)`
    images[3].style.transform = `translate(${corX / 25}px)`
    images[4].style.transform = `translate(${-corX / 25}px)`
    title.style.transform = `translate(${-corX / 45}px, ${corY / 35}px)`
})
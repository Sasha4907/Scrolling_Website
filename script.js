let sun = document.getElementById('sun');
let cloud = document.getElementById('cloud');
let mountain = document.getElementById('mountain');
let font = document.getElementById('font');
let text = document.getElementById('text');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.top = value * 1.05 + 'px';
    mountain.style.top = value * 0.5 + 'px';
    mountain.style.top = value * 0.5 + 'px';
    font.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';
})
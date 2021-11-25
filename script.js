const role = document.querySelector('.role'); 
const title = document.querySelector('.site-header__title');
title.addEventListener('click', function (){
    title.classList.toggle('color');
})

function sound() {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src ='audio/car.mp4';
    audio.play()
}

role.onclick = sound;
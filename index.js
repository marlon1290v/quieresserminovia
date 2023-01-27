const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si te amo mucho mi amorcito ya eres mi novia❤️ya podemos hacer muchas cosas eres mi persona favorita siempre me sacas una sonrisa💕te amo mi vida siempre te voy amar voy a cuidar tu corazon te voy a respetar y cuidarte ya eres mi novia wiiiiiiii te quiero besar😚y siempre vamos estar juntos te amo')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
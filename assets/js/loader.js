const triangulo = document.querySelectorAll('.triangulo');
const triangulo2 = document.querySelectorAll('.triangulo2');
const triangulo3 = document.querySelectorAll('.triangulo3');

TweenMax.staggerFromTo(triangulo2, 0.5, {
    margin: '',
    fill: 'blue',
    delay: 1
}, {
    margin: '30px',
    repeat: -1,
    yoyo: true,
    ease: SteppedEase.config(30)

}, )

TweenMax.staggerFromTo(triangulo3, 0.3, {
    margin: '',
    fill: 'blue'
}, {
    // margin: '-12px', 
    repeat: -1,
    yoyo: true,
    delay: 1
}, )
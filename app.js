const item = document.querySelectorAll('.slider__item')
let current = 0
let num = document.querySelector('.arrow__num')
let avatar = document.querySelectorAll('.slider__img-now')
const prew = document.querySelector('.arrow__prew')
const next = document.querySelector('.arrow__next')


// Слайдер
function slider(){
    for (let i = 0;i<item.length;i++){
        item[i].classList.add('active')       
    }
    item[current].classList.remove('active')
    num.innerHTML = current + 1
}
slider();

prew.onclick = function(){
    if (current -1 === -1){
        current  = item.length -1 
    }else{
        current--   
    }
    slider()
    AnimationOrbit ()
}

next.onclick = function(){
    if (current  === item.length -1){
        current  = 0
    }else{
        current++
    }
    slider()
    AnimationOrbit ()
}

// Анимация движения по кругу
function AnimationOrbit () {
    avatar[current].classList.add('slider__img-now-animation')

    // Отслеживание окончания анимации
    avatar[current].addEventListener("animationend", AnimationHandler, false)
    function AnimationHandler () {

    // Удаление класса с анимацией   
    avatar[current].classList.remove('slider__img-now-animation') 
    }
}


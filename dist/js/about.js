var textMenu = document.querySelector('.menu-btn')
var text = document.querySelector('.text')

textMenu.addEventListener('click', function(){
    textMenu.classList.toggle('text-active')
    text.classList.toggle('text-active')
})
const question = document.querySelector('.question-btn')
const desc = document.querySelector('.desc')

question.addEventListener('click', function (){
    question.classList.toggle('text-active')
    desc.classList.toggle('text-active')
})
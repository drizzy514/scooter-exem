window.addEventListener('DOMContentLoaded', function(){
   window.addEventListener('scroll', function(){
       const header = document.querySelector('header')
       header.classList.toggle('sticky', window.scrollY > 0)
   })
})






var menuBtn = document.querySelector('.header__menu-btn')
var header__list = document.querySelector('.header__list')
var header_link = document.querySelector('.header--link')



menuBtn.addEventListener('click', function  (){
    menuBtn.classList.toggle('active')
    header__list.classList.toggle('active')
    header_link.classList.toggle('link-active')
    
})



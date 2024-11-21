const menu = document.querySelector('.mob-menu')
const btnOpen = document.querySelector('.burger-icons')
const btnClose = document.querySelector('.mob-close-btn')

console.log('works');


btnOpen.addEventListener('click', () => {
  menu.classList.add('is-open')
})

btnClose.addEventListener('click', () => {
  menu.classList.remove('is-open')
})
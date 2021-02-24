const menuActions = document.getElementById('menu-actions')
const menuButton = document.getElementById('menu-img')
const menu = document.getElementById('menu')
const menuClose = document.getElementById('menu-close')
const nav = document.getElementById('nav')

menuActions.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block'
    menuButton.style.display = 'none'
    menuClose.style.display = 'block'
    nav.style.background = 'black'
  } else {
    menu.style.display = 'none'
    menuButton.style.display = 'block'
    menuClose.style.display = 'none'
    nav.style.background = 'transparent'
  }
})
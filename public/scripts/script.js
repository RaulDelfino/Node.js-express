const sidebar = document.querySelector('.sidebarFechada')
const icon = document.querySelectorAll('.icon')
const botao = document.querySelector('#botao')
const user = document.querySelector('.user')
const menu = document.querySelector('.menuFechado')

botao.addEventListener('click', () => {
    icon.forEach(item => {
    item.classList.toggle('invisible')
    })
    sidebar.classList.toggle('sidebar')
    user.classList.toggle('userAberto')
    menu.classList.toggle('menuFechado')
})
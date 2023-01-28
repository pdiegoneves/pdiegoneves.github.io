const menuItens = document.querySelectorAll('.menu-item');

menuItens.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        handleMenuItem(menuItem.getAttribute('data'))
    })
}


)

function handleMenuItem(page) {
    const mainContent = document.querySelector('.main-content');
    mainContent.setAttribute('src', `src/pages/${page}.html`)

}
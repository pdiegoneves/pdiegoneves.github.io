const menuItens = document.querySelectorAll('.menu-item');

menuItens.forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
        removeAllActives()
        handleMenuItem(menuItem.getAttribute('data'))
        menuItem.classList.add('active');
    })
}


)

function handleMenuItem(page) {
    const mainContent = document.querySelector('.main-content');
    mainContent.setAttribute('src', `src/pages/${page}.html`)
}

function removeAllActives() {
    menuItens.forEach(menuItem => {
        menuItem.classList.remove('active');
    })

}
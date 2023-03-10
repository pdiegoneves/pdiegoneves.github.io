const menuItens = document.querySelectorAll('.menu-item')

menuItens.forEach((menuItem) => {
  menuItem.addEventListener('click', (e) => {
    removeAllActives()
    handleMenuItem(menuItem.getAttribute('data'))
    menuItem.classList.add('active')
  })
})

async function handleMenuItem(page) {
  const mainContent = document.querySelector('.main-content')
  fetch(`src/pages/${page}.html`)
    .then((response) => response.text())
    .then((text) => {
        mainContent.innerHTML = text
        console.log(text)
    })
}

function removeAllActives() {
  menuItens.forEach((menuItem) => {
    menuItem.classList.remove('active')
  })
}

const botao = document.getElementById('iniciarTransicao')
pistas = document.querySelectorAll('.pista .bola')

botao.addEventListener('click', () => {
  pistas.forEach((pista) => {
    pista.classList.toggle('go')
  })
})

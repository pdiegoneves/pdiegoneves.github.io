const idadeText = document.getElementById('idade')
data = new Date()
idadeText.innerHTML = data.getFullYear() - 1986

const projetos = document.querySelectorAll('#projetos article')
const topoDaPagina = document.getElementById('topo-da-pagina')

projetos.forEach(projeto => {
    projeto.addEventListener('click', (e) => {
        e.preventDefault()
        window.open(`/src/projetos/${projeto.id}/`, '_blank')
    })
})


const sections = document.querySelectorAll('section')

sections.forEach( (section) => {
    section.style.paddingTop = topoDaPagina.clientHeight + 'px'
})


const efeitoDigitacao = document.querySelector('.efeito-digitacao')
digitar()

function digitar() {
    frase = efeitoDigitacao.innerText.split('')
    efeitoDigitacao.innerText = ''
    efeitoDigitacao.innerHtml = ''
    console.log(frase)

}
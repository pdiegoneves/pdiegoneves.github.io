const idadeText = document.getElementById('idade')
data = new Date()
idadeText.innerHTML = data.getFullYear() - 1986

const projetos = document.querySelectorAll('#projetos article')

projetos.forEach(projeto => {
    projeto.addEventListener('click', (e) => {
        e.preventDefault()
        window.open(`/src/projetos/${projeto.id}/`, '_blank')
    })
})
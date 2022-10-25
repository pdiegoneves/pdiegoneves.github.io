const name = document.getElementById('name')
const email = document.getElementById('email')
const button = document.getElementById('button')
const form = document.getElementById('form')
const ops = document.getElementById('ops')


function check() {
    if(name.value != '' && email.value != '') {
        button.classList.remove('invalid')
        ops.classList.remove('invalid')
    } else {
        mudarDeLugar()
        button.classList.add('invalid')
        ops.classList.add('invalid')
    }
}

function mudarDeLugar() {
let numeroAleatorio = Math.floor(Math.random() * form.clientWidth) - button.clientWidth
    if (numeroAleatorio > 0) {
        button.style.marginLeft = numeroAleatorio + 'px'
        ops.style.marginLeft = numeroAleatorio + 'px'
        setTimeout(() => {
            ops.classList.remove('invalid')
        }, 500)
    } else {
        button.style.marginLeft = 0 + 'px'
    }
}
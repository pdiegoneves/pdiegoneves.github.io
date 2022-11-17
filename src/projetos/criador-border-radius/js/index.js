const drawing = document.getElementById('drawing')
// document.getElementById('border-radius-1').value

function mundarBorderRadius() {
  const codeCss = document.getElementById('css')
  const valueLeftTop = document.getElementById('border-radius-top-left-value')
  const valueRightTop = document.getElementById('border-radius-top-right-value')
  const valueRightBotton = document.getElementById(
    'border-radius-botton-right-value'
  )
  const valueLeftBotton = document.getElementById(
    'border-radius-botton-left-value'
  )

  let border_radius_top_left =
    document.getElementById('border-radius-top-left').value +
    document.querySelector('input[type="radio"]:checked').value
  let border_radius_top_right =
    document.getElementById('border-radius-top-right').value +
    document.querySelector('input[type="radio"]:checked').value
  let border_radius_botton_right =
    document.getElementById('border-radius-botton-right').value +
    document.querySelector('input[type="radio"]:checked').value
  let border_radius_botton_left =
    document.getElementById('border-radius-botton-left').value +
    document.querySelector('input[type="radio"]:checked').value
  drawing.style.borderTopLeftRadius = border_radius_top_left
  drawing.style.borderTopRightRadius = border_radius_top_right
  drawing.style.borderBottomRightRadius = border_radius_botton_right
  drawing.style.borderBottomLeftRadius = border_radius_botton_left
  valueLeftTop.textContent = border_radius_top_left
  valueRightTop.textContent = border_radius_top_right
  valueRightBotton.textContent = border_radius_botton_right
  valueLeftBotton.textContent = border_radius_botton_left
  codeCss.value =
    `border-radius: ${border_radius_top_left} ${border_radius_top_right} ${border_radius_botton_right} ${border_radius_botton_left};`
}

function copiarCodigo() {
  const codeCss = document.getElementById('css')
  codeCss.select()
  codeCss.setSelectionRange(0, 99999)
  document.execCommand('copy')
  alert('Copiado para a área de transferência')
}

const formaSquare = document.getElementById('forma-square')
const formaRectangleH = document.getElementById('forma-rectangleh')
const formaRectangleV = document.getElementById('forma-rectanglev')

formaSquare.addEventListener('click', () => {
  formaRectangleH.classList.remove('active')
  formaRectangleV.classList.remove('active')
  formaSquare.classList.add('active')

  drawing.classList.remove('rectangleh')
  drawing.classList.remove('rectanglev')
  drawing.classList.add('square')
  
})
formaRectangleH.addEventListener('click', () => {
  formaRectangleV.classList.remove('active')
  formaSquare.classList.remove('active')
  formaRectangleH.classList.add('active')

  drawing.classList.remove('rectanglev')
  drawing.classList.remove('square')
  drawing.classList.add('rectangleh')
})
formaRectangleV.addEventListener('click', () => {
  formaSquare.classList.remove('active')
  formaRectangleH.classList.remove('active')
  formaRectangleV.classList.add('active')
  
  drawing.classList.remove('rectangleh')
  drawing.classList.remove('square')
  drawing.classList.add('rectanglev')
})


function limparFormas() {
  formas.forEach(forma => {
    forma.classList.remove('active')
  })
}
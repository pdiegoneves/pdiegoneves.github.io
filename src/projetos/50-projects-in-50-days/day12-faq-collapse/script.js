// const faqs = document.querySelectorAll('.faq')
// const faqToggles = document.querySelectorAll('.faq-toggle')

// faqToggles.forEach((faToggle, idx) => {
//   faToggle.addEventListener('click', () => {
//     faqs[idx].classList.toggle('active')
//   })
// })

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toogle) => {
  toogle.addEventListener('click', () => {
    toogle.parentNode.classList.toggle('active')
  })
})

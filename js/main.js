var glide = new Glide('#intro', {
  type: 'carousel',
  perView: 2,
  focusAt: 'center',
  autoplay: 3000,
  hoverpause: false,
  animationDuration: 2000,
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
})

glide.mount()
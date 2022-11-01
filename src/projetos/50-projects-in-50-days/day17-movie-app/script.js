const API_KEY = 'a8917691c1e73fa663f848a0e1f2e239'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1&language=pt-BR`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query="`

const doc = document
const form = doc.getElementById('form')
const search = doc.getElementById('search')
const main = doc.getElementById('main')

getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEL = doc.createElement('div')
    movieEL.classList.add('movie')
    movieEL.innerHTML = 
    `
        <img src="${IMG_PATH + poster_path}" alt="">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `
    main.appendChild(movieEL)
  })
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm + '"')

    search.value = ''
  } else {
    window.location.reload()
  }
})

// const nav = document.querySelector('#nav')
// Isso não é necessário, pois o JS já considera o "ID" como objeto

function onScroll() {
  if (scrollY == 0) {
    return nav.classList.remove('scroll')
  } else {
    return nav.classList.add('scroll')
  }
}

ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 1000
}).reveal(`
nav,
  #home, 
  #home h4, 
  #home a, 
  #home .stat, 
  #services,
  #services h4, 
  #services .card,
  #services h3,
  #services p,
  #services img,
  #about,
  #about h4`)

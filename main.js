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
  duration: 750
}).reveal('#home')

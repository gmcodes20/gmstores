const nav = document.querySelector('.nav__list');
const harmburger = document.querySelector('.harmburger')
const navList = document.querySelectorAll('.nav__items');
// const line = 


harmburger.addEventListener('click', menuToggle);

function menuToggle(e) {
  nav.classList.toggle('open');
  harmburger.classList.toggle('open')
  console.log(harmburger.classList)


  e.preventDefault()

}

navList.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    harmburger.classList.remove('open');
  })
})
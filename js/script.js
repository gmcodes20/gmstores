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



// Product Gallery
var ProductImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function(){
  ProductImg.src =smallImg[0].src;
}
smallImg[1].onclick = function(){
  ProductImg.src =smallImg[1].src;
}
smallImg[2].onclick = function(){
  ProductImg.src =smallImg[2].src;
}
smallImg[3].onclick = function(){
  ProductImg.src =smallImg[3].src;
}
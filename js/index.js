
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween:10,

  autoplay: {
    delay : 5500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
     280:{
      slidesPerView: 1,
      spaceBetween:10,
     },
     460:{
      slidesPerView: 2,
      spaceBetween:10,
     },
     809:{
      slidesPerView: 3,
      spaceBetween:10,
     },
     940:{
      slidesPerView: 4,
      spaceBetween:10,
     },
  }
});

// Show video
let playButton = document.querySelector('.play-movie')
let video = document.querySelector('.video-container')
let myVideo = document.querySelector('#myvideo')
let closeButton = document.querySelector('.close-video')

playButton.addEventListener("click",function(){
  // putting display flex when button is clicked
  video.style.display='flex'
  // autoplay when button is clicked
  // myVideo.play();
})

closeButton.addEventListener("click",function(){
  // hiding display when button is clicked
  video.style.display='none'
  // auto-pause on close video
  // myVideo.pause();
  location.reload();


})
 







const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close");
hamburgerMenu.addEventListener("click",()=>{
    mobileNav.classList.toggle("active");
});
closeNav.addEventListener("click",()=>{
    mobileNav.classList.remove("active");
});


const swiper = new Swiper('.swiper', {
    direction:'horizontal',
    loop:'true',
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
  });


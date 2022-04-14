let swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    navigation: {
        nextEl: ".slider__right",
        prevEl: ".slider__left",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1500: {
          slidesPerView: 5,
          },
        769: {
          slidesPerView: 3,
          pagination: {
              el: ".swiper-pagination",
            },
          },
        100: {
          slidesPerView: 1,
          pagination: {
              el: ".swiper-pagination",
            },
          }
        }
})

let swiper2 = new Swiper(".swiper-second", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".sert__right",
        prevEl: ".sert__left",
      },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        },
      770: {
        slidesPerView: 2,
        pagination: {
            el: ".swiper-pagination-second",
          },
        },
      100: {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination-second",
          },
        }
      }
})

let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")
let lock = document.querySelector("body")

burger.addEventListener("click", function(){
  burger.classList.toggle("header__burger_active")
  burgerMenu.classList.toggle("header__burger_list_active")
  lock.classList.toggle("lock")

})
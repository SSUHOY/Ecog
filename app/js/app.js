import { Swiper } from "swiper";
import { gsap } from "gsap";
import { Power2 } from "gsap";
import {
  Parallax,
  Mousewheel,
  Controller,
  Pagination,
  Scrollbar,
  Navigation,
} from "swiper/modules";
import MicroModal from "micromodal";

document.addEventListener("DOMContentLoaded", () => {
  // Modal

  MicroModal.init({
    openTrigger: "data-micromodal-open",
    closeTrigger: "data-micromodal-close",
    disableFocus: true,
    awaitCloseAnimation: true,
    awaitOpenAnimation: true,
  });

  Swiper.use([
    Parallax,
    Mousewheel,
    Controller,
    Pagination,
    Scrollbar,
    Navigation,
  ]);

  const swiperIMG = new Swiper(".slider-img", {
    loop: false,
    speed: 2400,
    slidesPerView: 1,
    parallax: true,
    pagination: {
      el: ".slider-pagination-count .total",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        let totalRes = total >= 10 ? total : `0${total}`;
        return totalRes;
      },
    },
  });

  const swiperText = new Swiper(".slider-text", {
    loop: false,
    speed: 2400,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiperIMG.controller.control = swiperText;
  swiperText.controller.control = swiperIMG;

  let curenum = document.querySelector(".slider-pagination-count .current"),
    pagecur = document.querySelector(".slider-pagination-current__num");

  swiperText.on("slideChange", function () {
    let ind = swiperText.realIndex + 1;
    let indRes = ind >= 10 ? ind : `0${ind}`;
    console.log("🚀 ~ ind:", ind);
    gsap.to(curenum, 0.2, {
      force3D: true,
      y: -10,
      opacity: 0,
      ease: Power2.easeOut,
      onComplete: function () {
        gsap.to(curenum, 0.1, { force3D: true, y: 10 });
        curenum.innerHTML = indRes;
        pagecur.innerHTML = indRes;
      },
    });
    gsap.to(curenum, 0.2, {
      force3D: true,
      y: 0,
      opacity: 1,
      ease: Power2.easeOut,
      delay: 0.3,
    });
  });
  // swiperText.on("sliderChange", function() {
  //   let ind = swiperText.activeIndex;
  //   console.log(ind);
  // });
});

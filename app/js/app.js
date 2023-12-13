import { Swiper } from "swiper";
import { Parallax, Mousewheel } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  Swiper.use([Parallax, Mousewheel]);

  const swiperIMG = new Swiper(".slider-img", {
    loop: false,
    speed: 2400,
    parallax: true,
    mousewheel: {
      invert: false,
    },
  });
});

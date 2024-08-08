const slideBox = document.querySelector(".slide");
const slideImg = document.querySelectorAll(".slide_img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let slide = 1;
let slideWidth = slideImg[0].clientWidth;
setInterval(function () {
  if (slide == 1) {
    $(slideImg[0]).css("opacity", "0");
    $(slideImg[1]).css("opacity", "1");
    slide = 2;
  } else if (slide == 2) {
    $(slideImg[0]).css("opacity", "1");
    $(slideImg[1]).css("opacity", "0");
    slide = 1;
  }
}, 8000);

$(next).click(function () {
  if (slide == 1) {
    $(slideImg[0]).css("opacity", "0");
    $(slideImg[1]).css("opacity", "1");
    slide = 2;
  } else if (slide == 2) {
    $(slideImg[0]).css("opacity", "1");
    $(slideImg[1]).css("opacity", "0");
    slide = 1;
  }
});
$(prev).click(function () {
  if (slide == 2) {
    $(slideImg[1]).css("opacity", "0");
    $(slideImg[0]).css("opacity", "1");
    slide = 1;
  } else if (slide == 1) {
    $(slideImg[1]).css("opacity", "1");
    $(slideImg[0]).css("opacity", "0");
    slide = 2;
  }
});

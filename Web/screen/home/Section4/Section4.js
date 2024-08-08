$(document).ready(function () {
  function isMobile() {
    var userAgent = navigator.userAgent;
    var mobile = /(iPhone|iPad|Android|BlackBerry|Windows Phone)/i.test(
      userAgent
    );
    return mobile;
  }

  let original = $(".AutoSlide_ul");
  let clone = $(".AutoSlide_ul").clone();
  clone.appendTo(".AutoSlide_box");
  clone.addClass("clone");
  original.addClass("original1");

  if (isMobile()) {
    // 모바일 일때만 나오는 JS
    //--------------------------//
    // PC Modal Window
    document.querySelector(".pc_button_More").style.display = "none";
    // Mobile page transition Button
    document.querySelector(".Mobile_button_More").style.display = "block";
    //Auto Slide Item Text

    $(".Title").css({ "z-index": "2", color: "white" });
  } else {
    // PC일때만 나오는 JS
    // --------------------//
    // PC Modal Window
    $(".pc_button_More").css("display", "block");
    // Mobile page transition Button
    $(".Mobile_button_More").css("display", "none");
    //Auto Slide Item Hover
    $(".Item").hover(
      function () {
        $(this).css({
          transform: "translateY(-15%)",
        });
      },
      function () {
        $(this).css({
          transform: "translateY(0%)",
        });
      }
    );
    // Auto Slide MouseHover = Stop ,NotHover = running
    $(".original1, .clone").hover(
      function () {
        $(".original1, .clone").css("animation-play-state", "paused");
      },
      function () {
        $(".original1, .clone").css("animation-play-state", "running");
      }
    );
    // Section Fade in Fade Out Animation
    $(window).scroll(function () {
      const Section3 = document.querySelector("#Section4");
      const Section3Height = $(Section3).position().top;
      if ($(window).scrollTop() + 400 >= Section3Height) {
        $(Section3).removeClass("Animationto");
        $(Section3).addClass("Animation");
      } else {
        $(Section3).addClass("Animationto");
        $(Section3).removeClass("Animation");
      }
    });
  }
});

// Modal window JS

$(".pc_button_More").click(function () {
  $(".body").not("#More").css("filter", "blur(5px)");
  $(".More_Page").slideDown();
  $(".More_Page").fadeIn();
});

$(".More_Close").click(function () {
  $(".More_Page").slideUp();
  $(".More_Page").fadeOut();
});

function onePage() {
  $(".one_page").css({
    display: "inline-table",
  });
  $(".two_page").css({
    display: "none",
  });
  $(".three_page").css({
    display: "none",
  });
  $(".four_page").css({
    display: "none",
  });
  $(".five_page").css({
    display: "none",
  });

  $(".one").addClass("active");
  $(".two").removeClass("active");
  $(".three").removeClass("active");
  $(".four").removeClass("active");
  $(".five").removeClass("active");
}

function twoPage() {
  $(".one_page").css({
    display: "none",
  });
  $(".two_page").css({
    display: "inline-table",
  });
  $(".three_page").css({
    display: "none",
  });
  $(".four_page").css({
    display: "none",
  });
  $(".five_page").css({
    display: "none",
  });

  $(".one").removeClass("active");
  $(".two").addClass("active");
  $(".three").removeClass("active");
  $(".four").removeClass("active");
  $(".five").removeClass("active");
}

function threePage() {
  $(".one_page").css({
    display: "none",
  });
  $(".two_page").css({
    display: "none",
  });
  $(".three_page").css({
    display: "inline-table",
  });
  $(".four_page").css({
    display: "none",
  });
  $(".five_page").css({
    display: "none",
  });

  $(".one").removeClass("active");
  $(".two").removeClass("active");
  $(".three").addClass("active");
  $(".four").removeClass("active");
  $(".five").removeClass("active");
}

function fourPage() {
  $(".one_page").css({
    display: "none",
  });
  $(".two_page").css({
    display: "none",
  });
  $(".three_page").css({
    display: "none",
  });
  $(".four_page").css({
    display: "inline-table",
  });
  $(".five_page").css({
    display: "none",
  });

  $(".one").removeClass("active");
  $(".two").removeClass("active");
  $(".three").removeClass("active");
  $(".four").addClass("active");
  $(".five").removeClass("active");
}

function fivePage() {
  $(".one_page").css({
    display: "none",
  });
  $(".two_page").css({
    display: "none",
  });
  $(".three_page").css({
    display: "none",
  });
  $(".four_page").css({
    display: "none",
  });
  $(".five_page").css({
    display: "inline-table",
  });

  $(".one").removeClass("active");
  $(".two").removeClass("active");
  $(".three").removeClass("active");
  $(".four").removeClass("active");
  $(".five").addClass("active");
}

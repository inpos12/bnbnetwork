$(document).ready(function () {
  function isMobile() {
    var userAgent = navigator.userAgent;
    var mobile = /(iPhone|iPad|Android|BlackBerry|Windows Phone)/i.test(
      userAgent
    );
    return mobile;
  }

  if (isMobile()) {
    // 모바일 일때만 나오는 JS
    $(".pc_animation").removeClass("pc_animation");
    $(".pc_animation_p").removeClass("pc_animation_p");
    $(".box_text").css("transform", "scale(1,1)");
  } else {
  }
});

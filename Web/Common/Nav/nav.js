$(document).ready(function () {
  // $(window).scroll(function () {
  //   const NavBar = document.querySelector("#Navbar");
  //   let offset1 = NavBar.offsetHeight;

  //   if ($(window).scrollTop() >= offset1) {
  //     $(NavBar).css({ backgroundColor: "#14126f" });
  //     // #1E2C58
  //   } else {
  //     $(NavBar).css({ backgroundColor: "transparent" });
  //   }
  // });

  // MobileNavbar Button //
  let MenuIcon = 0;
  $(".mobile_button").on("click", function () {
    // 버튼 클릭시 draw메뉴가 열린다
    if (MenuIcon == 0) {
      $(".mobile_navbar").css({
        transform: "translateX(0)",
        transition: "all 0.4s cubic-bezier(0.77, 0.2, 0.05, 1)",
      });
      // 버튼클릭시 세로 가운데로 뭉친다
      $(".top,.center,.bottom").css({
        transition: "all 0.4s cubic-bezier(0.77, 0.2, 0.05, 1)",
      });
      $(".top").css({ transform: "translateY(13px) " });
      $(".bottom").css({ transform: "translateY(7px)" });
      $(".center").css({ visibility: "hidden" });
      // 버튼클릭시 draw 메뉴가 열리고 버튼이 X표시로바뀐다
      setTimeout(() => {
        $(".top").css({ transform: "translateY(13px)  rotate(45deg) " });
        $(".bottom").css({ transform: "translateY(7px) rotate(-45deg)" });
        $(".pc_logo").css({ visibility: "hidden" });
      }, 350);
      MenuIcon = 1;
    } else {
      // X버튼을 클릭시 draw메뉴 닫힘
      $(".mobile_navbar").css({
        transform: "translateX(-50vw)",
      });
      // X버튼클릭스 버튼이 세로가운대로 뭉친다
      $(".top").css({ transform: "translateY(13px)rotate(0)" });

      $(".bottom").css({ transform: "translateY(7px)rotate(0)" });
      // 버튼이 원래대로 돌아간다
      setTimeout(() => {
        $(".top").css({ transform: "translateY(0px) rotate(0)" });
        $(".center").css({
          visibility: "visible",
          transform: "translateY(10px)",
        });
        $(".bottom").css({ transform: "rotate(0) translateY(20px)" });
      }, 350);
      $(".pc_logo").css({ visibility: "visible" });
      MenuIcon = 0;
    }
  });

  // 모바일 서브메뉴 //

  const MobileSubMenuButton_1 = $(".mobile_submenu_1_button,.link_1");
  const MobileSubMenuButton_2 = $(".mobile_submenu_2_button,.link_2");
  const MobileMainMenuUL = $("#mobile_mainmenu_list");
  const MobileSubMenu1_UL = $("#mobile_submenu_1");
  const MobileSubMenu2_UL = $("#mobile_submenu_2");
  const MobileBackButton = $("#mobile_back_button");
  let Count = 1;
  // 모바일 서브메뉴 더보기 회사소개 버튼클릭시
  $(MobileSubMenuButton_1).on("click", function () {
    // 0.8s동안 mainmenu를 좌측으로 안보이게 숨김
    $(MobileMainMenuUL).css({
      transform: "translateX(-50vw)",
    });
    // 회사소개 더보기 버튼클릭후 0.8s 뒤에
    // 화면에서 안보이는곳에서
    // MobileMainMenuU , MobileSubMenu2_UL 숨김
    // MobileSubMenu1_UL 표시
    setTimeout(() => {
      $(MobileMainMenuUL).css({
        display: "none",
      });
      $(MobileSubMenu2_UL).css({
        display: "none",
      });
      $(MobileSubMenu1_UL).css({
        display: "block",
      });
    }, 450);
    // 회사소개 더보기 버튼클릭후 0.9초뒤에
    //  MobileSubMenu1_UL , MobileBackButton
    // 좌측에서 우측으로 나타남
    setTimeout(() => {
      $(MobileSubMenu1_UL).css({
        transform: "translateX(0)",
      });
      $(MobileBackButton).css({
        transform: "translateX(0)",
      });
    }, 500);
    // 카운트를 2로조정 //뒤로가기버튼
    Count = 2;

    // 카운트가 2일때
    if (Count == 2) {
      // 뒤로가기 버튼을 클릭하면
      $(MobileBackButton).on("click", function () {
        //MobileBackButton,MobileSubMenu1_UL 좌측으로 사라짐 지속시간0.8초
        $(MobileBackButton).css({
          transform: "translateX(-50vw)",
        });
        $(MobileSubMenu1_UL).css({
          transform: "translateX(-50vw)",
        });
        // 뒤로가기 버튼클릭후  0.9초뒤
        //  화면에서 안보이는곳에서
        // MobileSubMenu1_UL MobileSubMenu2_UL 숨김
        // MobileMainMenuUL 표시
        setTimeout(() => {
          $(MobileMainMenuUL).css({
            display: "block",
          });
          $(MobileSubMenu1_UL).css({
            display: "none",
          });
          $(MobileSubMenu2_UL).css({
            display: "none",
          });
        }, 450);

        // 뒤로가기 버튼클릭후 1초뒤
        // MobileMainMenuUL 표시
        setTimeout(() => {
          $(MobileMainMenuUL).css({
            transform: "translateX(0vw)",
          });
        }, 500);
        // 다시카운트를 1로조정
        Count = 1;
      });
    }
  });
  // 사업영역 더보기 버튼클릭시
  $(MobileSubMenuButton_2).on("click", function () {
    // 0.8s동안 MobileMainMenuUL를 좌측으로 안보이게 숨김
    $(MobileMainMenuUL).css({
      transform: "translateX(-50vw)",
    });
    // 사업영역 더보기 버튼클릭후 0.8s 뒤에
    // 화면에서 안보이는곳에서
    // MobileMainMenuU , MobileSubMenu1_UL 숨김
    // MobileSubMenu2_UL 표시
    setTimeout(() => {
      $(MobileMainMenuUL).css({
        display: "none",
      });
      $(MobileSubMenu1_UL).css({
        display: "none",
      });
      $(MobileSubMenu2_UL).css({
        display: "block",
      });
    }, 450);
    // 회사소개 더보기 버튼클릭후 0.9초뒤에
    //  MobileSubMenu2_UL , MobileBackButton
    // 좌측에서 우측으로 나타남
    setTimeout(() => {
      $(MobileSubMenu2_UL).css({
        transform: "translateX(0)",
      });

      $(MobileBackButton).css({
        transform: "translateX(0)",
      });
    }, 500);
    // 카운트를 3로조정
    Count = 3;

    if (Count == 3) {
      // 뒤로가기 버튼을 클릭햇을때
      $(MobileBackButton).on("click", function () {
        //MobileBackButton,MobileSubMenu2_UL 좌측으로 사라짐 지속시간0.8초
        $(MobileBackButton).css({
          transform: "translateX(-50vw)",
        });
        $(MobileSubMenu2_UL).css({
          transform: "translateX(-50vw)",
        });
        // 뒤로가기 버튼클릭후  0.9초뒤
        //  화면에서 안보이는곳에서
        // MobileSubMenu1_UL MobileSubMenu2_UL 숨김
        // MobileMainMenuUL 표시
        setTimeout(() => {
          $(MobileSubMenu1_UL).css({
            display: "none",
          });
          $(MobileSubMenu2_UL).css({
            display: "none",
          });
          $(MobileMainMenuUL).css({
            display: "block",
          });
        }, 450);
        // 뒤로가기 버튼클릭후 1초뒤
        // MobileMainMenuUL 표시
        setTimeout(() => {
          $(MobileMainMenuUL).css({
            transform: "translateX(0vw)",
          });
        }, 500);
        // 다시카운트를 1로조정
        Count = 1;
      });
    }
  });

  $("#dropdownButton_1 ").mouseenter(function () {
    $(".dropdown_1").css({ display: "flex" });
  });
  $("#dropdownButton_1").mouseleave(function () {
    $(".dropdown_1").css({ display: "none" });
  });
  $("#dropdownButton_2 ").mouseenter(function () {
    $(".dropdown_2").css({ display: "flex" });
  });
  $("#dropdownButton_2").mouseleave(function () {
    $(".dropdown_2").css({ display: "none" });
  });
});

$(document).ready(function () {
  $.get("/bnbnetwrok/Web/Common/Nav/nav.html", function (data) {
    $("nav").html(data);
  });
  $.get("/bnbnetwrok/Web/Common/Comming/Comming.html", function (data) {
    $("#Comming").html(data);
  });
  $.get("/bnbnetwrok/Web/Common/Footer/Footer.html", function (data) {
    $("footer").html(data);
  });
});

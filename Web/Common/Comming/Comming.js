$(document).ready(function () {
  $.get("/bnbnetwork/Web/Common/Nav/nav.html", function (data) {
    $("nav").html(data);
  });
  $.get("/bnbnetwork/Web/Common/Comming/Comming.html", function (data) {
    $("#Comming").html(data);
  });
  $.get("/bnbnetwork/Web/Common/Footer/Footer.html", function (data) {
    $("footer").html(data);
  });
});

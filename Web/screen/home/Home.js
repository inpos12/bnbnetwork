$(document).ready(function () {
  $.get("/bnbnetwork/Web/Common/Nav/nav.html", function (data) {
    $("nav").html(data);
  });
  $.get("/bnbnetwork/Web/screen/home/Slide/Slide.html", function (data) {
    $("#Slide").html(data);
  });
  $.get("/bnbnetwork/Web/screen/home/Section1/Section1.html", function (data) {
    $("#Section1").html(data);
  });
  $.get("/bnbnetwork/Web/screen/home/Section2/Section2.html", function (data) {
    $("#Section2").html(data);
  });
  $.get("/bnbnetwork/Web/screen/home/Section3/Section3.html", function (data) {
    $("#Section3").html(data);
  });
  $.get("/bnbnetwork/Web/screen/home/Section4/Section4.html", function (data) {
    $("#Section4").html(data);
  });
  $.get("/bnbnetwork/Web/screen/home/Section5/Section5.html", function (data) {
    $("#Section5").html(data);
  });
  $.get("/bnbnetwork/Web/screen/home/Section6/Section6.html", function (data) {
    $("#Section6").html(data);
  });

  $.get("/bnbnetwork/Web/Common/Footer/Footer.html", function (data) {
    $("footer").html(data);
  });
});

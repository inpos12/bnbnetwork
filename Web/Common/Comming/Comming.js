$(document).ready(function () {
  $.get("../Nav/nav.html", function (data) {
    $("nav").html(data);
  });
  $.get("../Comming/Comming.html", function (data) {
    $("#Comming").html(data);
  });
  $.get("../Footer/Footer.html", function (data) {
    $("footer").html(data);
  });
});

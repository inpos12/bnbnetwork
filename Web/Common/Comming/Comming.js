$(document).ready(function () {
  $.get("../../common/Nav/nav.html", function (data) {
    $("nav").html(data);
  });
  $.get("../../Common/Comming/Comming.html", function (data) {
    $("#Comming").html(data);
  });
  $.get("../../Common/Footer/Footer.html", function (data) {
    $("footer").html(data);
  });
});

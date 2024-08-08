$(document).ready(function () {
  $.get("./Web/common/Nav/nav.html", function (data) {
    $("nav").html(data);
  });
  $.get("./Web/Common/Comming/Comming.html", function (data) {
    $("#Comming").html(data);
  });
  $.get("./Web/Common/Footer/Footer.html", function (data) {
    $("footer").html(data);
  });
});

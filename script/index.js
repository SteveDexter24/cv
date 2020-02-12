// Fade in of the page contents
$("html").hide();
$("html").fadeIn(1200);

// "Special" link bar to hide or show an extra bar of buttons for 4 task
$(document).ready(function () {
  // Toggle between collapse and dropdown menu for mobile devices
  $('.navbar-toggler').click(function() {
    $('#navbarNavDropdown').toggleClass("collapse", "dropdown");
  });
  // Click to toggle Special
  $("#special").click(function() {
    $('#special-bar').removeClass(["sp-bar"]);
  });
});

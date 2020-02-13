// Fade in of the page contents
$("html").hide();
$("html").fadeIn(2000);

// "Special" link bar to hide or show an extra bar of buttons for 4 task
$(document).ready(function () {
  // Toggle between collapse and dropdown menu for mobile devices
  $('.navbar-toggler').click(function() {
    $('#navbarNavDropdown').toggleClass("collapse", "dropdown");
  });
  // close navbar hamburger menu when item in the navbar is clicked (for mobile devices only)
  $(".nav-item-1").click(function() {
    $('#navbarNavDropdown').toggleClass("collapse", "dropdown");
  });
  // Show and close bottom navbar when "special" is clicked
  $("#special").click(function() {
    $('#special-bar').toggleClass("sp-bar", "sp-bar");
  });
  // close bottom navbar when 'close' is clicked
  $(".close-nav-bar").click(function() {
    $('#special-bar').toggleClass("sp-bar", "sp-bar");
  });
});

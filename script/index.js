// Fade in of the page contents
$("html").hide();
$("html").fadeIn(2000);

// "Special" link bar to hide or show an extra bar of buttons for 4 task
$(document).ready(function() {
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
  // Toggle 'active' on navbars
  $("li.nav-item").click(function() {
    $('li').removeClass("active");
    $(this).addClass("active");
  });
  // Task 1: Align
  var timer;
  $(".align-text").click(function() {
    alert("after 2 seconds, it will align text in this sequence: left>>right>>center>>left... untill you click another navbar item or click close");
    timer = setInterval(alignment, 1910);
  });

  function alignment() {
    if ($(".align-text").hasClass("active")) {
      $("h1.text-success").removeClass("text-left");
      setTimeout(function() {
        $("h1, h2, h3, h4, h5, h6").css("text-align", "left");
      }, 10);
      setTimeout(function() {
        $("h1, h2, h3, h4, h5, h6").css("text-align", "right");
      }, 700);
      setTimeout(function() {
        $("h1, h2, h3, h4, h5, h6").css("text-align", "center");
      }, 1200);
    } else {
      clearInterval(timer);
      $("h1, h2, h3, h4, h5, h6").css("text-align", "inherit");
      $("h1.text-success").addClass("text-left");
    }
  }
  // Task 2: New Hobby
  $(".add-new-hobby").click(function() {
    var myHobby = prompt("Enter a new hobby.");
    if (myHobby != null && myHobby != "") {
      if (!($(".gonna-add-hobby").hasClass("dummyClass"))) {
        $(".gonna-add-hobby").append("<h3>My Hobbies</h3>").addClass("text-success dummyClass");
        $(".dummyClass").append("<ul></ul>").addClass("hobby-ul").css("list-style", "none");
      }
      // Create new list item elements
      var hobby_ul = $("<li></li>").text(myHobby).addClass(" bg-secondary text-left text-white").css({
        "margin": "5px 15px",
        "padding": "8px"
      });
      $(".hobby-ul").append(hobby_ul);
    }
  });

  // Task 3: Scroll
  // Trigger progress bar and hide progress bar
  $(".scroll-bar").click(function() {
    $(".progress").toggleClass("progress-scroll", "progress-scroll");
    $(".progress").css({
      "position": "sticky",
      "top": "0",
      "z-index": "3"
    });
    if($(".progress").hasClass("progress-scroll")){
      $(".scroll-top").attr("href", "#ab-me");
    }else {
      $(".scroll-top").attr("href", "#s1");
    }
  });
});

// Scroll bar implimentation
$(window).scroll(function(){
  var scroll_top = $(window).scrollTop();
  var doc_height = $(document).height();
  var window_height = $(window).height();
  var scroll_percent = (scroll_top / (doc_height - window_height)) * 100;
  $("#new_progress").attr("aria-valuenow", scroll_percent);
  $("#new_progress").css("width", scroll_percent + "%");
  $("#text-progres").text(scroll_percent * 100 + "% scrolled");
});

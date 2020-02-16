// Fade in of the page contents
$("html").hide();
$("html").fadeIn(2800);


// "Special" link bar to hide or show an extra bar of buttons for 4 task
$(document).ready(function() {
  $("p").css("font-size", "105%");
  setTimeout(function() {
    $(".my-spinners").addClass("hide-show");
  }, 2700);
  setTimeout(function() {
    $("section").hide();
    $("header").hide();
    $("footer").hide();
  }, 0);
  setTimeout(function() {
    $("section").show();
    $("header").show();
    $("footer").show();
  }, 2800);
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
    timer = setInterval(alignment, 1210);
  });

  function alignment() {
    if ($(".align-text").hasClass("active")) {
      $("h1.text-success").removeClass("text-left");
      setTimeout(function() {
        $("h1, h2, h3, h4, h5, h6").css("text-align", "left");
      }, 0);
      setTimeout(function() {
        $("h1, h2, h3, h4, h5, h6").css("text-align", "right");
      }, 400);
      setTimeout(function() {
        $("h1, h2, h3, h4, h5, h6").css("text-align", "center");
      }, 800);
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
      "z-index": "3",
      "height": "24px"
    });

    $(".progress-0").css({
      "position": "sticky",
      "top": "0",
      "z-index": "3",
      "height": "24px",
    });

  });

  // Task 4: bonus
  var myMessage = "After this alert is dismissed, you will see a floating red button on the bottom right of the screen. Press the button to toggle the message box. Message box and button floats. Also, when the page just load or reloaded, there will be spinners emulating that the page is loading.";
  $(".bonus-stuff").click(function() {
    alert(myMessage);
    $("#big-plus-button").toggleClass("hide-show");
  });
  $("#big-plus-button").click(function() {
    $(".card-ask-me").toggleClass("hide-show");
    if (!($(".card-ask-me").hasClass("hide-show"))) {
      document.getElementById("message-bubble").src = "image/close.png";
    } else {
      document.getElementById("message-bubble").src = "image/speech-bubble.png";
    }

  });
  $("#your-message").keydown(function() {
    var yourMessage = $("textarea").val();
    if (event.keyCode == 13) {
      if (yourMessage == "" || yourMessage == null) {
        // Enter a toast
        myToastFunction("Message was not sent, try typing again!", "rgba(192, 57, 43,0.6)");
      } else {
        $("#my-form").submit();
        // toast for success
        myToastFunction("Message Sent!", "rgba(22, 160, 133, 0.6)");
        // close message box
        $(".card-ask-me").toggleClass("hide-show");
        // change icon image back to speech bubble
        document.getElementById("message-bubble").src = "image/speech-bubble.png";
      }
      $("textarea").val("");

      return false;
    }
  });


});
// Toast function
function myToastFunction(my_toast_message, bg_color) {
  var myToastBox = $("<div></div>").addClass("text-center text-white").css({
    "background": bg_color,
    "height": "80px",
    "width": "100%",
    "position": "fixed",
    "top": "40%",
    "z-index": "5"
  });
  myToastBox.attr("id", "toast-box-id");
  var myToastMessage = $("<h2></h2>").text(my_toast_message).css({
    "position": "relative",
    "top": "30%",
    "font-family": "'Open Sans', sans-serif"
  });
  var myToast = myToastBox.append(myToastMessage);

  $("html").append(myToast);

  var time_out = setTimeout(function() {
    myToastBox.toggleClass("hide-show");
  }, 1400);
}

// Scroll bar implimentation
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
  var doc_height = $(document).height();
  var window_height = $(window).height();
  var scroll_percent = ((scroll_top / (doc_height - window_height)) * 100);

  if (scroll_percent > 40 && scroll_percent < 70) {
    $("#new_progress").css("background", "#3498db");
  } else if (scroll_percent > 70 && scroll_percent < 90) {
    $("#new_progress").css("background", "#f39c12");
  } else if (scroll_percent > 90) {
    $("#new_progress").css("background", "#e74c3c");
  } else {
    $("#new_progress-0").css("background", "#16a085");
    $("#new_progress").css("background", "#16a085");
  }

  $("#new_progress-0").attr("aria-valuenow", scroll_percent);
  $("#new_progress-0").css("width", scroll_percent + "%");
  $("#new_progress-0").text(parseInt((scroll_percent)) + "% of the entire page scrolled").css("font-size", "18px");

  $("#new_progress").attr("aria-valuenow", scroll_percent);
  $("#new_progress").css("width", scroll_percent + "%");
  $("#new_progress").text(parseInt((scroll_percent)) + "% of the entire page scrolled").css("font-size", "18px");

  if (scroll_percent < ($(window).height() / 44) - 11) {
    $(".progress-0").removeClass("hide-show");
    $(".progress-1").addClass("hide-show");
  } else {
    $(".progress-0").addClass("hide-show");
    $(".progress-1").removeClass("hide-show");
  }
});

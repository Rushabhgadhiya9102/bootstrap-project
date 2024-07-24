
// ----------------- N A V B A R ------------------

document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
  });
});

// ----------------- N A V B A R - E N D -----------------

// --------------- L O G I N - L O G O U T - F O R M --------------- 

$(document).ready(function () {
  $(".sign-up").hide();

  $(".btn-1").on("click", function () {
    $(".sign-in").fadeOut(150);
    $(".sign-up").fadeIn(150);
    $(".form-main-banner").addClass(".sign-up");
  });

  $(".btn-2").on("click", function () {
    $(".sign-up").fadeOut(150);
    $(".sign-in").fadeIn(150);
    $(".form-main-banner").removeClass(".sign-up");
  });
});

// --------------- L O G I N - L O G O U T - F O R M - E N D -------------- 

AOS.init();
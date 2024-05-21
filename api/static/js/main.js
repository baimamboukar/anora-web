// Header :: Start
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $("header").outerHeight();

$(window).scroll(function () {
  if ($(window).scrollTop() >= 150) {
    $("header").addClass("header-sm");
  } else {
    $("header").removeClass("header-sm");
  }
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  let st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}

$(".nav-mobile-menu").on("click", function () {
  $("body").toggleClass("mobile-menu-open");
});
// Header :: End

$(document).on("ready", function () {
  owlInitialize();
});

$(window).resize(function () {
  owlInitialize();
});

// Mobile Javascript
// if ($(window).width() <= 767) {
$(".nav-link").on("click", function () {
  $("body").toggleClass("mobile-menu-open");
});

// intellibra-plans mobile owlCarousel
async function owlInitialize() {
  if ($(window).width() < 991) {
    $(".mobile-cards").addClass("owl-carousel owl-theme");
    triggerMobileOwl();
  } else {
    $(".mobile-cards").owlCarousel("destroy");
  }
}

function triggerMobileOwl() {
  $(".mobile-cards").owlCarousel({
    autoWidth: true,
    items: 1,
    center: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        margin: 20,
        items: 1,
      },
      600: {
        margin: 40,
        items: 2.5,
      },
    },
  });

  $(".logo-imgs.mobile-cards").owlCarousel({
    responsiveClass: true,
    autoWidth: true,
    center: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        margin: 10,
        items: 2.5,
      },
      768: {
        margin: 30,
        items: 3,
      },
    },
  });
}

//intellibra-homepage-1 banner-carousel//
$(".banner-carousel.owl-carousel").owlCarousel({
  items: 7,
  loop: true,
  margin: 50,
  dots: false,
  center: true,
  autoWidth: true,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1.5,
      margin: 30,
    },
    768: {
      items: 2.5,
      margin: 30,
    },
    1000: {
      items: 3,
    },
    1200: {
      margin: 30,
    },
    1600: {
      margin: 50,
    },
  },
});

//intellibra-homepage-3 ss-carousel//
$(".ss-carousel.owl-carousel").owlCarousel({
  items: 5,
  loop: true,
  margin: 100,
  dots: false,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1.5,
      margin: 30,
    },
    768: {
      items: 2.5,
      margin: 30,
    },
    1000: {
      items: 3,
    },
    1200: {
      margin: 30,
    },
    1600: {
      margin: 70,
    },
    1920: {
      margin: 130,
    },
  },
});

//testimonial carousel //
$(".testimonial-reviews.owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  nav: false,
  items: 1,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

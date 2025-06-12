var typed = new Typed("#auto-type", {
  strings: ["IIT's", "NIT's", "JEE Advanced", "JEE Mains"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

var carousel = document.getElementById("carousel");
var slideList = document.getElementById("slideList");
var slideItems = document.getElementsByClassName("slide-item");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var currentIndex = 0;
var slideWidth = slideItems[0].offsetWidth;
var slideCount = slideItems.length;
var maxSlideIndex = slideCount - 1;
var clicked = false;

prevBtn.addEventListener("click", slideToPrev);
nextBtn.addEventListener("click", slideToNext);

let slideInterval = setInterval(slideToNext, 3000);

function slideToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slideCount - 1;
  }
  slideList.style.transform =
    "translateX(-" + currentIndex * slideWidth + "px)";

  clearInterval(slideInterval);

  slideInterval = setTimeout(slideToNext, 3000);
}

function slideToNext() {
  if (screen.width < 600) {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  } else {
    if (currentIndex < slideCount - 3) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }

  slideList.style.transform =
    "translateX(-" + currentIndex * slideWidth + "px)";

  clearInterval(slideInterval);

  slideInterval = setTimeout(slideToNext, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger");
  const crossIcon = document.getElementById("cross");
  const navBtn = document.getElementById("navIcon");
  const navLinkContainer = document.getElementById("navLinkContainer");
  const navItems = document.querySelectorAll(".navItem");

  burgerIcon.addEventListener("click", function () {
    burgerIcon.classList.toggle("invisible");
    crossIcon.classList.toggle("invisible");
    navLinkContainer.classList.toggle("w-[70vw]");
    navLinkContainer.classList.toggle("w-0");
  });

  crossIcon.addEventListener("click", function () {
    burgerIcon.classList.toggle("invisible");
    crossIcon.classList.toggle("invisible");
    navLinkContainer.classList.toggle("w-[70vw]");
    navLinkContainer.classList.toggle("w-0");
  });

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", function () {
      burgerIcon.classList.toggle("invisible");
      crossIcon.classList.toggle("invisible");
      navLinkContainer.classList.toggle("w-[70vw]");
    navLinkContainer.classList.toggle("w-0");
    });
  });

  window.addEventListener("scroll", () => {
    if (navLinkContainer.classList.contains("w-[70vw]")) {
    navLinkContainer.classList.toggle("w-[70vw]");
    navLinkContainer.classList.toggle("w-0");
    burgerIcon.classList.remove("invisible");
    crossIcon.classList.add("invisible");
    }
  });

});

// Load  Animation

document.addEventListener("DOMContentLoaded", () => {
  let count = 1;
  if (screen.width < 600) {
    document.getElementById("burger").addEventListener("click", () => {
      if (count === 1) {
        const navAnimation = gsap.fromTo(
          "nav>div>ul>*",
          { opacity: 0, y: -20 },
          {
            y: 0,
            ease: "Power2.easeOut",
            delay: 0.15,
            stagger: 0.15,
            opacity: 1,
            duration: 0.3,
          }
        );
        count++;
      }
    });
  } else {
    gsap.fromTo(
      "nav>div>ul>*",
      { opacity: 0, y: -20 },
      {
        y: 0,
        ease: "Power2.easeOut",
        delay: 0.25,
        stagger: 0.25,
        opacity: 1,
        duration: 1,
      }
    );
  }
  gsap.to("#heroCenter button", {
    opacity: 1,
    x: 0,
    ease: "Power2.easeIn",
    duration: 0.7,
  });

  gsap.to("#heroCenter>img", {
    opacity: 1,
    x: 0,
    ease: "Power2.easeIn",
    duration: 0.7,
  });

  // Odometer animation

  var perc = document.querySelector("#percentile .nums");
  var less = document.querySelector("#lessPercentile .nums");

  odone = new Odometer({
    el: perc,
    value: 0,
    format: "d",
  });
  odtwo = new Odometer({
    el: less,
    value: 0,
    format: "d",
  });
  ScrollTrigger.create({
    trigger: "#resultCenter",
    start: "top bottom",
    marker: true,
    onEnter: function () {
      odone.update(99);
      odtwo.update(10000);
    },
  });

  // ScrollTrigger.create({
  //   trigger: '#hero',
  //   start: "top top",
  //   end: "top top",
  //   marker: true,
  //   onEnter: function () {
  //     document.querySelector("nav").classList.add("bg-white");
  //     document.querySelector("nav").classList.add("shadow-md");
  //   },
  //   onEnterBack: function () {
  //     document.querySelector("nav").classList.remove("bg-white");
  //     document.querySelector("nav").classList.remove("shadow-md");
  //   }
  // })

  if (screen.width < 600) {
    ScrollTrigger.create({
      trigger: ".video-item",
      start: "top bottom",
      marker: true,
      onEnter: function () {
        gsap.to(".video-item", {
          opacity: 1,
          x: 0,
          ease: "power2.out",
          delay: 0.1,
          stagger: 0.8,
          duration: 0.5,
        });
      },
    });
  }
});

// swiper library

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    enabled: false,
  },

  grid: {
    column: 2,
    fill: "column",
  },
  slidesPerView: 1,
  breakpoints: {
    // When window width is >= 600px
    800: {
      slidesPerView: 3, // Show 3 slides per view on larger screens
    },
    600: {
      slidesPerView: 2, // Show 2 slides per view on larger screens
    },
  },
  allowTouchMove: false,
});

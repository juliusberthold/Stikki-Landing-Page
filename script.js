gsap.registerPlugin(ScrollTrigger);

let dose = document.querySelector ('.stikki-dose')
let rubbers = document.querySelector ('.stikki-rubbers')
let masks = document.querySelectorAll('.mask');
let heading2 = document.querySelectorAll('h2');
let heading3 = document.querySelectorAll('h3');
let description = document.querySelectorAll('.description');

// dosen and rubber movement

gsap.to(".stikki-dose", {
    scrollTrigger: {
        trigger:".stikki-dose",
        start: "20% 40%",
        scrub: true,
    },
    y: 30,
    duration: 1,
});

gsap.to(".stikki-rubbers", {
    scrollTrigger: {
        trigger:".stikki-rubbers",
        start: "20% 40%",
        scrub: true,
    },
    y: -30,
    duration: 1,
});

gsap.from("h2",{
    scrollTrigger:{
        trigger: "h2",
        start: "bottom center",
        // toggleActions: "restart pause reverse pause"
    },
    opacity: 0, 
    y: 100, 
    duration: .5
});


masks.forEach( mask => {
    let image = mask.querySelector('img');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mask,
            toggleActions: "restart none none reset"
        }
    });

    tl.set(mask, {autoAlpha: 1});

    tl.from(mask, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 90,
        scale: 1,
        delay: -1.5,
        ease: Power2.out
    });
})

gsap.from("h3",{
    scrollTrigger:{
        trigger: "h2",
        start: "bottom center",
        toggleActions: "restart pause reverse pause"
    },
    opacity: 0,
});

gsap.from(".description",{
    scrollTrigger:{
        trigger: ".description",
        start: "left center",
    },
    opacity: 0,
});

// nav jump animation

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

// side navigation
$(document).ready(function() {
    var tl = gsap.timeline({ paused: true });
    tl.to("#navigationWrap", 0.4, { x: 0, opacity: 1, display: 'block', ease: "slow" });
    tl.to(".navBtn", 0.2, { opacity: 0 });
    tl.to(".close", 0.2, { display: "block", opacity: 1 });
    tl.from(".menu", 0.3, { opacity: 0, y: 20, stagger: 0.1 });
    $(".navBtn").click(function() {
        tl.play();
        tl.timeScale(1.2);
    })
    $(".close").click(function() {
        tl.timeScale(3);
        tl.reverse();
    })
});

// intro div about us
$(document).ready(function() {
    var tl = gsap.timeline({ paused: true });
    tl.to(".intro", 0.5, { opacity: 1, display: 'block', ease: "power1" });
    tl.fromTo(".introLogo", { opacity: 0, scale: 2 }, { opacity: 1, duration: 1.5, scale: 1, ease: "linear" }, "-=1");
    tl.to(".text", { y: "0%", opacity: 1, duration: 0.5, stagger: 0.2, ease: "power1.out" });
    tl.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.3, ease: "linear" }, "-=0.8");
    tl.from(".redLine1", { duration: 3, opacity: 0, x: "-50", ease: "linear" }, "-=0.5");
    tl.from(".redLine2", { duration: 3, opacity: 0, x: "50", ease: "linear" }, "-=3");
    tl.from(".redLine3", { duration: 3, opacity: 0, x: "-50", ease: "linear" }, "-=3");
    $(".introBtn").click(function() {
        tl.play();
        tl.timeScale(1);
        disableScrolling();
        document.body.style.overflow = 'hidden';


    })
    $(".closeIntro").click(function() {
        tl.timeScale(5);
        tl.reverse();
        document.body.style.overflow = 'visible';

        enableScrolling();

    })
    // enable-disable scrolling---------------------------------
    function disableScrolling() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function() { window.scrollTo(x, y); };

    }

    function enableScrolling() {
        window.onscroll = function() {};
    }


});



// intro div about us end

//side-Nav items
// var $menuItem = $('.menu-item');
// var $menuItemAnim;
// $(document).ready(function() {
//     $menuItem.mouseenter(function() {
//         $menuItemAnim = gsap.to($(this), { duration: 0.35, scale: 1.1, transformOrigin: "0px 20px" });
//     })
//     $menuItem.mouseleave(function() {
//         $menuItemAnim.reverse();
//     })
// });

//buttons
$(document).ready(function() {
    console.clear();
    document.querySelector(".myBtn").addEventListener("mouseenter", doCoolStuff);
    document.querySelector(".myBtn").addEventListener("mouseleave", doCoolStuff);
    const tl = new TimelineMax();
    tl.to(".myBtn rect", 0.9, { attr: { width: 210 }, opacity: 0.8, ease: Elastic.easeOut.config(1, 1) });
    tl.to(".myBtn text", 0.2, { fill: "#fff", ease: Linear.easeNone }, 0.);
    tl.reversed(true);

    function doCoolStuff() {
        tl.reversed(!tl.reversed());
    }
});
$(document).ready(function() {
    console.clear();
    document.querySelector(".myBtn2").addEventListener("mouseenter", doCoolStuff);
    document.querySelector(".myBtn2").addEventListener("mouseleave", doCoolStuff);
    const tl = new TimelineMax();
    tl.to(".myBtn2 rect", 1, { attr: { width: 230 }, opacity: 0.8, ease: Elastic.easeOut.config(1, 1) });
    tl.to(".myBtn2 text", 0.2, { fill: "#fff", ease: Linear.easeNone }, 0.);
    tl.reversed(true);

    function doCoolStuff() {
        tl.reversed(!tl.reversed());
    }
});
$(document).ready(function() {
    console.clear();
    document.querySelector(".myBtn3").addEventListener("mouseenter", doCoolStuff);
    document.querySelector(".myBtn3").addEventListener("mouseleave", doCoolStuff);
    const tl = new TimelineMax();
    tl.to(".myBtn3 rect", 1, { attr: { width: 230 }, opacity: 0.8, ease: Elastic.easeOut.config(1, 1) });
    tl.to(".myBtn3 text", 0.2, { fill: "#fff", ease: Linear.easeNone }, 0.);
    tl.reversed(true);

    function doCoolStuff() {
        tl.reversed(!tl.reversed());
    }
});
$(document).ready(function() {
    console.clear();
    document.querySelector(".myBtn4").addEventListener("mouseenter", doCoolStuff);
    document.querySelector(".myBtn4").addEventListener("mouseleave", doCoolStuff);
    const tl = new TimelineMax();
    tl.to(".myBtn4 rect", 1, { attr: { width: 230 }, opacity: 0.8, ease: Elastic.easeOut.config(1, 1) });
    tl.to(".myBtn4 text", 0.2, { fill: "#fff", ease: Linear.easeNone }, 0.);
    tl.reversed(true);

    function doCoolStuff() {
        tl.reversed(!tl.reversed());
    }
});
$(document).ready(function() {
    console.clear();
    document.querySelector(".myBtn5").addEventListener("mouseenter", doCoolStuff);
    document.querySelector(".myBtn5").addEventListener("mouseleave", doCoolStuff);
    const tl = new TimelineMax();
    tl.to(".myBtn5 rect", 1, { attr: { width: 230 }, opacity: 0.8, ease: Elastic.easeOut.config(1, 1) });
    tl.to(".myBtn5 text", 0.2, { fill: "#fff", ease: Linear.easeNone }, 0.);
    tl.reversed(true);

    function doCoolStuff() {
        tl.reversed(!tl.reversed());
    }
});
$(document).ready(function() {
    console.clear();
    document.querySelector(".myBtn6").addEventListener("mouseenter", doCoolStuff);
    document.querySelector(".myBtn6").addEventListener("mouseleave", doCoolStuff);
    const tl = new TimelineMax();
    tl.to(".myBtn6 rect", 1, { attr: { width: 230 }, opacity: 0.8, ease: Elastic.easeOut.config(1, 1) });
    tl.to(".myBtn6 text", 0.2, { fill: "#fff", ease: Linear.easeNone }, 0.);
    tl.reversed(true);

    function doCoolStuff() {
        tl.reversed(!tl.reversed());
    }
});
$(document).ready(function() {
    console.clear();
    document.querySelector(".myBtn-p").addEventListener("mouseenter", doCoolStuff);
    document.querySelector(".myBtn-p").addEventListener("mouseleave", doCoolStuff);
    const tl = new TimelineMax();
    tl.to(".myBtn-p rect", 1, { attr: { width: 177 }, opacity: 0.8, ease: Elastic.easeOut.config(1, 1) });
    tl.to(".myBtn-p text", 0.2, { fill: "#fff", ease: Linear.easeNone }, 0.);
    tl.reversed(true);

    function doCoolStuff() {
        tl.reversed(!tl.reversed());
    }
});

// hero sec animations when scroll down
gsap.registerPlugin(ScrollTrigger);
gsap.to(".heroContent", {
    duration: 10,
    opacity: 0,
    ease: "power1.out",
    stagger: 0.4,
    y: -35,
    scrollTrigger: {
        scrub: 2,
        trigger: ".heroContent",
        start: "top top",
        end: "bottom top"
    }
});
// gsap.to(".navbar-brand", {
//     duration: 0.5,

//     ease: "power3.out",

//     y: 40,

//     scrollTrigger: {
//         scrub: 2,
//         trigger: ".heroContent",
//         start: "top top",
//         end: "bottom top"
//     }
// });
// gsap.to(".navBtn", {
//     duration: 1,
//     backgroundColor: "#2b3a5c",
//     ease: "power1",
//     scrollTrigger: {
//         trigger: ".sec1",
//         scrub: 1,
//         start: "115px 20% ",
//         endTrigger: ".sec1",
//         end: "center 80%",
//         // markers: true
//     }
// });


// navigation appear on scroll
// gsap.to("#navbarLight", {
//     duration: 0.5,
//     ease: "power3",
//     opacity: 1,
//     yPercent: "100",

//     scrollTrigger: {
//         // markers: true,
//         trigger: ".sec1",
//         // scrub: 1,
//         toggleActions: "play none none reverse",

//         start: "-115px center ",
//         endTrigger: ".sec1",
//         end: "center 80%"
//     }
// });


//section 2 - services animation

gsap.from(".fadeIn_title", {
    duration: 1,
    opacity: 0,
    y: -40,
    ease: "power1.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".sec1",
        // scrub: 2,
        toggleActions: "play none none reverse",
        start: "top 60% ",
        endTrigger: ".sec1",
        end: "center 50%"
    }
});
gsap.from(".fadeIn", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power1.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".sec1",
        // scrub: 2,
        toggleActions: "play none none reset",
        start: "top 60% ",
        endTrigger: ".sec1",
        end: "center 50%",

    }
});
gsap.from("#servicesVector", {
    duration: 3,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".sec1",
        // scrub: 2,
        toggleActions: "play none none reset",
        start: "top 60% ",
        endTrigger: ".sec1",
        end: "center 50%",

    }
});
// section 2 animation end


//sections scroll snapping hero section
// let sections = gsap.utils.toArray(".panel");
// gsap.to(sections, {
//     ease: "power1",
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".panel",
//         // scrub: true,
//         snap: 2 / (sections.length - 2),
//         // markers: true
//     }
// });
// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray(".panel").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "center 40%",
//         // markers: "true",
//         ease: "power1"
//     });
// });
// ScrollTrigger.create({
//     snap: 1 / 4 // snap whole page to the closest section!
// });



// milestones animation
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".trigger_ms",
        toggleActions: "play none none reset",
        start: "top 80%",
        // markers: true,
        // scrub: 1
        toggleActions: "play none none reverse"
    }
});
tl.from(".milestone h2, .milestone .sub-header, .threeLines", {
    duration: 0.8,
    delay: 0.1,
    opacity: 0,
    ease: "power1.out",
    y: -50
})
tl.from(".milestone h6", {
    duration: 1,
    opacity: 0,
    scale: 1.6,
    stagger: 0.1,
    ease: "power1.out"

})
tl.from(".milestone p.lead", {
    duration: 1,
    opacity: 0,
    x: 25,
    stagger: 0.1,
    ease: "power1.out"

}, "-=2");



// products & solutions - verticals
gsap.to(".sec3", {
    duration: 2,
    // backgroundColor: "#dbf5f7",
    backgroundColor: "#0d7a80",


    ease: "power1.out",
    scrollTrigger: {
        trigger: ".sec3",
        toggleActions: "play none none reverse",
        start: "top 60%"
        // markers: true
    }
});
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".trigger_ps",
        toggleActions: "play none none reverse",
        start: "top center"
        // markers: true
        // scrub: 1
    }
});
tl.from(".verticalsTitle", {
    duration: 1,
    opacity: 0,
    y: -40,
    ease: "power1.out",
    stagger: 0.2,
});
tl.from(".fadeIn2", {
    duration: 2,
    delay: 0.5,
    opacity: 0,
    y: 50,
    ease: "elastic.out(0.8, 0.4)",
    stagger: 0.30
}, "-=1");
tl.from(".view_more", {
    duration: 0.5,
    opacity: 0,
    ease: "power1.out",
    stagger: 0.2
}, "-=1");



// loading screen animation
// jQuery(document).ready(function($) {
//     if (sessionStorage.getItem('loadingScreenSession') == null) {

//         sessionStorage.setItem('loadingScreenSession', 'true');
//     } else {
//         var element = document.getElementById("my-loader");
//         element.classList.add("d-none");
//     }
// });

$(document).ready(function() {

    function disableScrolling() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function() { window.scrollTo(x, y); };
        document.body.style.overflow = 'hidden';
    }

    function enableScrolling() {
        window.onscroll = function() {};
        document.body.style.overflow = 'visible';
    }
    disableScrolling();
    var tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".loaderSpan", { y: "0%", duration: 1.5, stagger: 0.25, delay: 0.5 })
    tl.to(".loaderLogo", { opacity: 1, duration: 2, delay: 0.5 })
    tl.to(".slider", { y: "-100%", duration: 1 })
    tl.to(".loader", { y: "-100%", duration: 0.4, onComplete: enableScrolling }, "-=0.7")
    tl.from(".heroContent", { y: 30, opacity: 0, duration: 0.4, stagger: 0.12, reversed: true }, "-=0.7")
    tl.fromTo(".navbar, .navBtn, #logo_one", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.2");


});





// case studies
// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray(".pinPanel").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//         scrub: 2
//     });
// });
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pinWrapper",
        start: "top 35%",
        scrub: 1
    }
});
tl.fromTo(".titleCaseStudy", { opacity: 0, y: "-50" }, {
    duration: 3,
    ease: "power3.out",
    opacity: 3,
    scale: 1.5
});



// scroll to top
gsap.to(".fa-angle-up", { duration: 1, repeat: -1, yoyo: true, y: 11 });


// dynamically set animation for new divs
// gsap.utils.toArray(".animatePanel").forEach((animatePanel, i) => {
//     gsap.to(animatePanel, {
//         ease: "power3.out",
//         scale: 1,
//         duration: 3,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: animatePanel,
//             start: "top 80%",
//             toggleActions: "restart reset restart none"
//         }
//     });
// });


// horizontal scrolling - case study cards
let scroll_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.factsContainer',
            start: "top center",
            // pin: true,
            scrub: true,
            end: "+=500",
            // markers: true,
        }
    }),
    facts = [...document.querySelectorAll('.fact')]
scroll_tl.to('.factsContainer h2', {
    scale: 1.5,
    duration: 1,
    ease: "slow"
})
scroll_tl.to(facts, {
    xPercent: -80 * (facts.length - 1),
    scrollTrigger: {
        trigger: ".factsContainer_sm",
        start: "center center",
        pin: true,
        // horizontal: true,
        // markers: true,
        scrub: 1,
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => `+=${smallFactsContainer.offsetWidth}`
        end: () => `+=4320`
    }
});


// partners
gsap.registerPlugin(ScrollTrigger);

gsap.to("#logo", {
    duration: 0.1,
    // backgroundColor: "#dbf5f7",
    opacity: 0,


    scrollTrigger: {
        trigger: "#partner",
        toggleActions: "play none reset reverse",
        start: "center center",
        end: "bottom bottom",
        // markers: true
    }
});
gsap.to("#logo2", {
    duration: 0.1,
    // backgroundColor: "#dbf5f7",
    opacity: 1,


    scrollTrigger: {
        trigger: "#partner",
        toggleActions: "play none reset reverse",
        start: "center center",
        end: "bottom bottom",
        // markers: true
    }
});
gsap.to("#logo", {
    duration: 0.1,
    ease: "power3.out",
    opacity: 1,
    scrollTrigger: {
        trigger: ".case_study_card",
        start: "top bottom",
        toggleActions: "restart reverse reverse reverse"
        // markers: "true"
    }

});
gsap.to("#logo2", {
    duration: 0.1,
    ease: "power3.out",
    opacity: 0,
    scrollTrigger: {
        trigger: ".case_study_card",
        start: "top bottom",
        toggleActions: "restart reverse reverse reverse"
        // markers: "true"
    }

});
gsap.to("#logo", {
    duration: 0.1,
    ease: "power3.out",
    opacity: 0,
    scrollTrigger: {
        trigger: ".newsroom",
        start: "center center",
        toggleActions: "restart reverse reverse reverse"
        // markers: "true"
    }

});
gsap.to("#logo2", {
    duration: 0.1,
    ease: "power3.out",
    opacity: 1,
    scrollTrigger: {
        trigger: ".newsroom",
        start: "center center",
        toggleActions: "restart reverse reverse reverse"
        // markers: "true"
    }

});
gsap.to("#logo", {
    duration: 0.1,
    ease: "power3.out",
    opacity: 1,
    scrollTrigger: {
        trigger: ".footer",
        start: "center center",
        toggleActions: "restart reverse reverse reset"
        // markers: "true"
    }

});
gsap.to("#logo2", {
    duration: 0.1,
    ease: "power3.out",
    opacity: 0,
    scrollTrigger: {
        trigger: ".footer",
        start: "center center",
        toggleActions: "restart reverse reverse reset"
        // markers: "true"
    }

});

// news room


gsap.from(".newsContainer", {
    duration: 3,
    // backgroundColor: "#dbf5f7",
    opacity: 0,
    y: 50,
    ease: "power1.out",


    scrollTrigger: {
        trigger: ".newsroom",
        toggleActions: "play none reset reverse",
        start: "top center",
        markers: true
    }
});




// owl carousel
$(document).ready(function() {

    $('.owl-1').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 6
    })

});
//side navigation
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

    tl.fromTo(".introLogo", { opacity: 0, scale: 3 }, { opacity: 1, duration: 2, scale: 1, ease: "linear" }, "-=1");
    tl.to(".text", { y: "0%", opacity: 1, duration: 0.5, stagger: 0.2, ease: "power1.out" });
    tl.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.3, ease: "linear" }, "-=0.8");
    tl.from(".redLine1", { duration: 3, opacity: 0, x: "-50", ease: "linear" }, "-=0.5");
    tl.from(".redLine2", { duration: 3, opacity: 0, x: "50", ease: "linear" }, "-=3");

    tl.from(".redLine3", { duration: 3, opacity: 0, x: "-50", ease: "linear" }, "-=3");





    $(".introBtn").click(function() {

        tl.play();
        tl.timeScale(1.2);
        disableScrolling();





    })
    $(".closeIntro").click(function() {


        tl.timeScale(5);

        tl.reverse();

        enableScrolling();

    })
});





// enable-disable scrolling---------------------------------
function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function() { window.scrollTo(x, y); };
}

function enableScrolling() {
    window.onscroll = function() {};
}
// intro div about us end

//side-Nav items
var $menuItem = $('.menu-item');
var $menuItemAnim;
$(document).ready(function() {
    $menuItem.mouseenter(function() {

        $menuItemAnim = gsap.to($(this), { duration: 0.35, scale: 1.1, transformOrigin: "0px 20px" });
    })
    $menuItem.mouseleave(function() {

        $menuItemAnim.reverse();

    })
});

//buttons

$(document).ready(function() {

    console.clear();

    document.querySelector(".myBtn").addEventListener("mouseenter", doCoolStuff);
    document.querySelector(".myBtn").addEventListener("mouseleave", doCoolStuff);


    const tl = new TimelineMax();
    tl.to(".myBtn rect", 1, { attr: { width: 220 }, opacity: 0.8, ease: Elastic.easeOut.config(1, 1) });
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


// animations when scroll down

gsap.registerPlugin(ScrollTrigger);

gsap.to(".heroContent", {
    duration: 10,
    opacity: 0,
    ease: "linear",
    stagger: 0.4,
    y: -35,
    scrollTrigger: {
        scrub: 2,
        trigger: ".scrollTriggerHeroContent",
        start: "50% top"
    }
});
gsap.to(".videoFade", {
    duration: 1,
    opacity: 0,
    ease: "linear",
    stagger: 0.4,
    // scrollTrigger: { markers: true, trigger: ".scrollTriggerHeroContent", toggleActions: "reset play reverse reverse", start: "bottom top" }
    scrollTrigger: {
        scrub: 2,
        trigger: ".scrollTriggerHeroContent",
        start: "-30px top",
        endTrigger: ".scrollTriggerHeroContent",
        end: "550px 100px",
        // markers: true

    }
});
gsap.to(".navBtn", {
    duration: 1,
    backgroundColor: "#000",
    ease: "power1",
    borderRadius: "100px",


    scrollTrigger: {
        trigger: ".sec1",
        scrub: 1,
        start: "115px 20% ",
        endTrigger: ".sec1",
        end: "center 80%",
        // markers: true
    }


});
gsap.to("#logo_one", {
    duration: 0.5,
    ease: "power3",
    opacity: 0,



    scrollTrigger: {
        // markers: true,
        trigger: ".sec1",
        scrub: 1,
        start: "-115px 20% ",
        endTrigger: ".sec1",
        end: "center 80%"
    }


});

//section 2 - services animation
gsap.from(".fadeIn", {
    duration: 4,
    opacity: 0,
    opacity: 0,
    y: 50,
    ease: "power1",
    stagger: 1,




    scrollTrigger: {
        trigger: ".sec1",
        scrub: 2,
        start: "top center ",
        endTrigger: ".sec1",
        end: "center 50%"
        // markers: true
    }


});
gsap.from(".fadeIn_title", {
    duration: 4,
    opacity: 0,
    y: -40,
    ease: "power1",
    stagger: 1,




    scrollTrigger: {
        trigger: ".sec1",
        scrub: 2,
        start: "top center ",
        endTrigger: ".sec1",
        end: "center 50%"
        // markers: true
    }


});


gsap.to(".sec1", {
    duration: 0.5,
    backgroundColor: "#fff",
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".sec1",
        toggleActions: "play none none reverse",
        start: "top 30%",
        endTrigger: ".sec1"
        // markers: true
    }


});
// section 2 animation end


//sections scroll snapping hero section

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    ease: "power1",
    duration: 3,


    scrollTrigger: {
        trigger: ".panel",
        // scrub: true,
        snap: 2 / (sections.length - 2),
        // markers: true
    }
});

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
        scrub: 1
    }
});


tl.from(".milestone h2, .milestone .sub-header, .threeLines", {
    duration: 1,
    delay: 0.1,
    opacity: 0,
    ease: "power",
    y: -40
})
tl.from(".milestone h6", {
    duration: 2,
    opacity: 0,
    scale: 1.6,
    stagger: 0.1

})
tl.from(".milestone p.lead", {
    duration: 1,
    opacity: 0,
    x: 25,
    stagger: 0.1,
}, "-=2");
// products & solutions
gsap.to(".sec3", {
    duration: 1,
    backgroundColor: "#071a2e",
    ease: "none",

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
        toggleActions: "play none none reset",
        start: "top center"
        // markers: true
        // scrub: 1
    }
});

tl.from(".fadeIn2", {
    duration: 2,
    delay: 0.5,
    opacity: 0,
    opacity: 0,
    y: 50,
    ease: "elastic.out(1, 0.4)",
    stagger: 0.30
});

// loading screen animation

jQuery(document).ready(function($) {




    if (sessionStorage.getItem('loadingScreenSession') == null) {
        function disableScrolling() {
            var x = window.scrollX;
            var y = window.scrollY;
            window.onscroll = function() { window.scrollTo(x, y); };
            // document.body.style.overflow = 'hidden';

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


        sessionStorage.setItem('loadingScreenSession', 'true');




    } else {
        var element = document.getElementById("my-loader");
        element.classList.add("d-none");
    }


});
$(document).ready(function() {

});


gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".pinPanel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 2

    });



});



var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
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
tl.to("#logo_one", { duration: 2, opacity: 1 });

gsap.to(".fa-angle-up", { duration: 1, repeat: -1, yoyo: true, y: 11 });




// dynamically set animation for new divs
gsap.utils.toArray(".animatePanel").forEach((animatePanel, i) => {
    gsap.to(animatePanel, {
        ease: "power3.out",
        scale: 1,
        duration: 3,
        opacity: 1,

        scrollTrigger: {
            trigger: animatePanel,
            start: "top 80%",

            toggleActions: "restart reset restart none"
        }
    });


});
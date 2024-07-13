function locomotive(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locomotive();

Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    skew: true,
    duration: 1,
});

Shery.makeMagnet(".hero>.right>.text>a, nav>.right>.hamburger", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

function textAnime(){
    Shery.textAnimate(".hero>.left>.bottom>h4", {
        style: 1,
        y: 1,
        delay: 0.05,
        duration: .2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.5,
      });
}
let flag = true;

function lockScroll() {
}

function menu(){
    let menu = document.getElementById("menu");
    let line = document.getElementById("line");
    let line1 = document.getElementById("line1");


    if(flag == true){
        menu.style.right = "-150%";
        line.style.stroke = "#fff";
        line1.style.stroke = "#fff";
        flag = false;
        gsap.to("nav>.right>.menu a, nav>.right>.menu>button",{
            opacity: 1,
            duration: 1.5,
            stagger: .2,
            delay: .7,
            rotateX: 0,
            // x: 50,
            y: -20,
            // scale: 2,
            ease: "power2"
        })
    }
    else{
        menu.style.right = "-2500%";
        line.style.stroke = "#000";
        line1.style.stroke = "#000";
        flag = true;
        gsap.to("nav>.right>.menu a, nav>.right>.menu>button",{
            opacity: 0,
            duration: 1, 
            stagger: .2,
            rotateX: 100,
            // x: 50,
            y: 20,
            delay: .2,
            // scale: 2,
            ease: "power2"
        })
    }
}


let tl = gsap.timeline();

tl.from("nav>.logo>img, nav>.right>.hamburger",{
    opacity: 0,
    duration: 2, 
    // y: -50,
    delay: .2,
    stagger: .3,
    scale: 0,
    ease: "expo.out"
},"hero")
// .from("nav>.right a, nav>.right>button",{
//     opacity: 0,
//     duration: 2, 
//     stagger: .2,
//     // x: 50,
//     y: -50,
//     delay: .2,
//     // scale: 2,
//     ease: "elastic.out(1, 0.8)"
// },"hero")
.from(".hero>video",{
    opacity: 0,
    duration: 2, 
    stagger: .2,
    // x: 50,
    y: -50,
    scale: 1.5,
    ease: "elastic.out(1, 0.6)",
    delay: 1.2
},"hero")
.from(".hero>.left>.top",{
    opacity: 0,
    duration: 1, 
    stagger: .2,
    delay: .8,
    // x: 50,
    y: 50,
},"hero")
.from(".hero>.left>.bottom>h4",{
    opacity: 0,
    onStart: ()=> textAnime(),
    duration: 1, 
    delay: 1.4
},"hero")
.from(".hero>.left>.bottom>h1",{
    opacity: 0,
    duration: 2, 
    stagger: .2,
    rotateX: 100,
    delay: 2,
    scale: .9,
    y: 15,
    ease: "elastic.out(1, 0.6)"
},"hero")
.from(".hero>.left>.bottom>a",{
    opacity: 0,
    delay: 1,
    duration: 1, 
    // x: 50,
    scale: 0.5,
    ease: "elastic.out(1, 0.8)",
    delay: 2.8
},"hero")
.from(".hero>.right>.text",{
    opacity: 0,
    duration: 2, 
    // x: 50,
    stagger: .3,
    y: -50,
    ease: "elastic.out(1, 0.8)",
    delay: 2.8
},"hero")



gsap.from(".scroller ",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".scroller",
        start: "top 70%",
        end: "bottom bottom",
        // markers: true
    },

    opacity: 0,
    scale: 2,
    duration: 2,
    ease: "elastic.out(1, 1.2)"
})

gsap.from(".section2>.container>.text",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section2>.container>.text",
        start: "top 90%",
        end: "bottom bottom",
        // markers: true
    },

    opacity: 0,
    y: 100,
    duration: 2,
    ease: "elastic.out(1, 0.8)"
})

gsap.from(".section2>.container>.left>video",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section2>.container>.left>video",
        start: "top 60%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    scale: 2,
    rotate: -125,
    duration: 2,
    ease: "elastic.out(1, 0.8)"
})

gsap.from(".section2>.container>.right h3",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section2>.container>.left>video",
        start: "top 60%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    // scale: 1.5,
    rotateX: 10,
    y: 50,
    duration: 2,
    stagger: .1,
    ease: "elastic.out(1, 0.8)"
})

gsap.from(".section2>.container>.right>button",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section2>.container>.right>button",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    scale: 0.5,
    y: 50,
    duration: 1.5,
    ease: "elastic.out(1, 0.8)"
})

gsap.from(".section3>.left p",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section3>.left p",
        start: "top 75%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    // scale: 0.5,
    stagger: .3,
    y: 50,
    duration: 1.5,
    ease: "elastic.out(1, 0.8)"
})

gsap.from(".section3>.left>button",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section3>.left>p",
        start: "top 65%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    scale: 0.5,
    y: 50,
    duration: 1.5,
    ease: "elastic.out(1, 0.8)"
})

function section3TextAnime(){
    Shery.textAnimate(".section3>.right>h4", {
        style: 1,
        y: 1,
        delay: 0.1,
        duration: .2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.5,
      });
}

gsap.from(".section3>.right>h4",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section3>.right>h4",
        start: "top 75%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    onStart: ()=> section3TextAnime(),
    // y: 50,
    duration: 1.5,
    ease: "elastic.out(1, 0.8)"
})

gsap.from(".section3>.right>h1",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section3>.right>h1",
        start: "top 75%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "elastic.out(1, 0.8)"
})

gsap.from(".section4>.box",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section4>.box",
        start: "top 75%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    y: 50,
    scale: .8,
    stagger: .2,
    duration: 1.5,
    ease: "elastic.out(1, 0.8)"
})

gsap.from(".section4>.box>button",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section4>.box>button",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    x: 40,
    duration: 1,
    stagger: .2,
    ease: "power3"
})

gsap.from(".section4>.box>video",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section4>.box>video",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    scale: 0,
    duration: 2,
    stagger: .2,
    ease: "elastic.out(1, 0.7)"
})

gsap.from(".section4>.box>h2",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section4>.box>h2",
        start: "top 100%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    x: 50, 
    duration: 2,
    stagger: .2,
    ease: "elastic.out(1, 0.7)"
})



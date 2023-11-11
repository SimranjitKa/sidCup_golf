var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(details){
    crsr.style.left = details.x + 7+"px";
    crsr.style.top = details.y+ 7+"px";
    blur.style.left = details.x-200+"px";
    blur.style.top = details.y-200+"px";
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about", {
    y : 50,
    opacity : 0,
    duration : 1,
    stagger : 0.4,
    scrollTrigger : {
        trigger : "#about-us",
        scroller : "body",
        start : "top 68%",
        end : "top 58%",
        scrub : 2
    }
})

// gsap.from(".card", {
//     scale : 0.8,
//     opacity : 0,
//     duration : 1,
//     stagger : 0.4,
//     scrollTrigger : {
//         trigger : ".card",
//         scroller : "body",
//         start : "top 68%",
//         end : "top 58%",
//         scrub : 2
//     }
// })
gsap.from("#colon1",{
    y : -70,
    x : -70,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        // markers : true,
        start : "top 63%",
        end : "top 45%",
        scrub : 4,

    }
})


gsap.from("#colon2", {
    x : -70,
    y : -70,
    scrollTrigger : {
        trigger : "#colon2",
        scroller : "body",
        start : "top 63%",
        end : "top 45%",
        scrub : 2
    }
})

gsap.from("#page4 h1", {
    y: 30,
    scrollTrigger : {
        trigger : "#page4 h1",
        scroller : "body",
        start : "top 75%",
        end : "top 70%",
        scrub : 3
    }
})
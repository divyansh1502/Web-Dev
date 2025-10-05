gsap.to("#box2",{
    y:"-85%",
    duration:2,
    delay:0.5

})
gsap.from("#page1 #nav ul ",{
    y:-10,
    delay:2.5,
    stagger:.3,
    opacity:0

})
gsap.to("#page2",{
    x:"-280%",
    duration:3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -300%",
        scrub:5,
        pin:true
    }

})
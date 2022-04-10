var backg = document.getElementById("backg");
var allstyle = document.getElementsByClassName("first-f-flex")
var overflow = document.getElementById("overflow");
var firstLayout = document.getElementById("first");
var secondLayout = document.getElementById("second");
var thirdLayout = document.getElementById("third");
var fourLayout = document.getElementById("four");
var fiveLayout = document.getElementById("five");

firstLayout.addEventListener("mouseover",function(){
    overflow.style.background = 'rgba(23, 22, 22, 0.67)';
    backg.style.background = 'url(./photo/project.png)'
    backg.style.backgroundSize = 'cover'

    var i ;
    for(i=0; i < allstyle.length ; i++){
        allstyle[i].style.color = 'white';
        allstyle[i].style.borderBottom = '2px solid white';
    }
})
 
firstLayout.addEventListener("mouseleave",function(){
    overflow.style.background = 'transparent';
    backg.style.background = 'none';
    firstLayout.style.color='rgba(23, 22, 22, 0.67)';
    var j ;
    for(j=0; j < allstyle.length ; j++){
        allstyle[j].style.color = '#111';
        allstyle[j].style.borderBottom = '2px solid #111';
    }
})


secondLayout.addEventListener("mouseover",function(){
    overflow.style.background = '#000000be';
    backg.style.background = 'url(./photo/s.jpg)'
    backg.style.backgroundSize = 'cover'

    var i ;
    for(i=0; i < allstyle.length ; i++){
        allstyle[i].style.color = 'white';
        allstyle[i].style.borderBottom = '2px solid white';
    }
})
 
secondLayout.addEventListener("mouseleave",function(){
    overflow.style.background = 'transparent';
    backg.style.background = 'none';
    firstLayout.style.color='#111';
    var j ;
    for(j=0; j < allstyle.length ; j++){
        allstyle[j].style.color = '#111';
        allstyle[j].style.borderBottom = '2px solid #111';
    }
})

thirdLayout.addEventListener("mouseover",function(){
    overflow.style.background = '#000000be';
    backg.style.background = 'url(./photo/car.jpg)'
    backg.style.backgroundSize = 'cover'

    var i ;
    for(i=0; i < allstyle.length ; i++){
        allstyle[i].style.color = 'white';
        allstyle[i].style.borderBottom = '2px solid white';
    }
})
 
thirdLayout.addEventListener("mouseleave",function(){
    overflow.style.background = 'transparent';
    backg.style.background = 'none';
    firstLayout.style.color='#111';
    var j ;
    for(j=0; j < allstyle.length ; j++){
        allstyle[j].style.color = '#111';
        allstyle[j].style.borderBottom = '2px solid #111';
    }
})

fourLayout.addEventListener("mouseover",function(){
    overflow.style.background = '#000000be';
    backg.style.background = 'url(./photo/robot.jpg)'
    backg.style.backgroundSize = 'cover'

    var i ;
    for(i=0; i < allstyle.length ; i++){
        allstyle[i].style.color = 'white';
        allstyle[i].style.borderBottom = '2px solid white';
    }
})
 
fourLayout.addEventListener("mouseleave",function(){
    overflow.style.background = 'transparent';
    backg.style.background = 'none';
    firstLayout.style.color='#111';
    var j ;
    for(j=0; j < allstyle.length ; j++){
        allstyle[j].style.color = '#111';
        allstyle[j].style.borderBottom = '2px solid #111';
    }
})


fiveLayout.addEventListener("mouseover",function(){
    overflow.style.background = '#000000be';
    backg.style.background = 'url(./photo/camera.jpg)'
    backg.style.backgroundSize = 'cover'

    var i ;
    for(i=0; i < allstyle.length ; i++){
        allstyle[i].style.color = 'white';
        allstyle[i].style.borderBottom = '2px solid white';
    }
})
 
fiveLayout.addEventListener("mouseleave",function(){
    overflow.style.background = 'transparent';
    backg.style.background = 'none';
    firstLayout.style.color='#111';
    var j ;
    for(j=0; j < allstyle.length ; j++){
        allstyle[j].style.color = '#111';
        allstyle[j].style.borderBottom = '2px solid #111';
    }
})


let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

gsap.set(".marquee__inner", {xPercent: -50});

window.addEventListener("scroll", function(){
  
  if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
   
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  
  currentScroll = window.pageYOffset
});





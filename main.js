let bottonLeftCarausel = document.getElementById("carausel-nav-left");
let bottonRightCarausel = document.getElementById("carausel-nav-right");
let carouselInner = document.getElementById("carousel-inner");

let slideIndex = 0;

bottonRightCarausel.onclick = handleRightButton;
bottonLeftCarausel.onclick = handleLeftButton;


function handleRightButton() {
     if(slideIndex < 2 ){
        console.log("right");
        slideIndex++;
        carouselInner.style.transform = `translateX(-${1280 * slideIndex}px)`
     }else{
        slideIndex = 0;
        carouselInner.style.transform = `translateX(-${1280 * slideIndex}px)`
     }
}

function handleLeftButton() {
    if(slideIndex > 0 ){
       console.log("left");
       slideIndex--;
       carouselInner.style.transform = `translateX(-${1280 * slideIndex}px)`
    }else{
       slideIndex = 2;
       carouselInner.style.transform = `translateX(-${1280 * slideIndex}px)`
    }
}


const sliderItems = document.querySelectorAll(".slider-item");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

function init() {
    console.log("resize");
    width = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = width* sliderItems.length + "px";
    sliderItems.forEach(item =>
        {item.style.width = width + "px";
        item.style.height = "auto";
    });
    rollSlider();
}

window.addEventListener("resize", init);
init();

document.querySelector(".slider-next").addEventListener("click", function(){
    count++;
    if (count >= sliderItems.length){
        count = 0;
    }
    rollSlider();
});

document.querySelector(".slider-prev").addEventListener("click", function(){
    count--;
    if (count < 0){
        count = sliderItems.length - 1;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = "translate(-" + count*width + "px)";
}

/*document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

const logBlock = document.querySelector(".slider")

let x1 = null;
let y1 = null;

function handleTouchStart(event){
    const firstTouch = event.touches[0]

    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    console.log(x1, y1);
}

function handleTouchMove(event){
    if (!x1 || !y1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    console.log(x2, y2);
    let xDif = x2 - x1;
    let yDif = y2 - y1;

    if(Math.abs(xDif)> Math.abs(yDif)){
        if (xDif > 0) logBlock("right");
        else console.log("left");
    }
    else{
        if (yDif > 0) console.log("down");
        else console.log("up");
    }
    x1 = null;
    y1 = null;
} */
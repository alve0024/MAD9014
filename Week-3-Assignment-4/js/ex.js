// JavaScript Document
// Global variables
var longRect, shortRect = null;


document.addEventListener("DOMContentLoaded", function(){
    longRect = document.querySelector(".long-rect");
    longRect.addEventListener("mouseover", mouseOver);
    longRect.addEventListener("mouseout", mouseOut);
    shortRect = document.querySelector(".short-rect"); 
});

function mouseClick() {
    alert("You clicked!");
}

function mouseOut() { 
  shortRect.onclick = mouseClick;
  shortRect.innerHTML = "The mouse is out the big Box";   
}

function mouseOver() {
  shortRect.innerHTML = "The mouse is over the big Box"; 
}



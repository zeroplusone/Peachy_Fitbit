import document from "document";
import { vibration } from "haptics";

// let myPopup = document.getElementById("my-popup");
let suggestion = document.getElementById("suggestion");
let title = document.getElementById("title");
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let myTime = title.getElementById("header/text");
let timeDescription = title.getElementById("copy/text");

let btnTR = document.getElementById("btn-tr");
let btnBR = document.getElementById("btn-br");

// Show the popup
suggestion.style.display = "inline";
title.style.display = "none";
btnLeft.style.display = "none";
btnRight.style.display = "none";

// document.onkeypress = function(e) {
//   console.log("Key pressed: " + e.key);
//   if(e.key == "up"){
//     suggestion.style.display = "inline";
//     title.style.display = "none";
//     btnLeft.style.display = "none";
//     btnRight.style.display = "none";     
//   }else if (e.key == "down"){
//     suggestion.style.display = "none";
//     title.style.display = "inline";
//     btnLeft.style.display = "inline";
//     btnRight.style.display = "inline"; 
//   }
// }

btnTR.onactivate = function(evt) {
    console.log("up");
    suggestion.style.display = "inline";
    title.style.display = "none";
    btnLeft.style.display = "none";
    btnRight.style.display = "none"; 
    btnBR.style.display = "inline";
  }

btnBR.onactivate = function(evt) {
  console.log("down");
  suggestion.style.display = "none";
  title.style.display = "inline";
  btnLeft.style.display = "inline";
  btnRight.style.display = "inline";
  btnBR.style.display = "none";
}

var count;
var interval = null;
var counting =false;

btnLeft.onclick = function(evt) {
  console.log("pad");
  if(!counting){
    count=4;
    startCounting();
  }
}

btnRight.onclick = function(evt) {
  console.log("tampon");
  if(!counting){
    count=6;
    startCounting();
  }
}

function startCounting() {
    interval = setInterval(updateDisplay, 1000);
    counting=true;
    myTime.text = count+" minutes";
    timeDescription.text="left to change"; 
}

function updateDisplay() {
  count--;
  if (count >=0) {
    myTime.text = count+" minutes";
  }else{
    vibration.start("ring");
    
    if(count<=-2){
      vibration.stop();
      clearInterval(interval);
      myTime.text = "Change Now!";
      timeDescription.text="";
      counting=false;
    }
  }
}
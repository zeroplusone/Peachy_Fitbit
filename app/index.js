/*
 * Entry point for the watch app
 */
// import document from "document";

// let container = document.getElementById("container");

// // Get the selected index
// let currentIndex = container.value;

// // Set the selected index
// container.value = 0; // jump to first slide

import document from "document";
import { vibration } from "haptics";

let myPopup = document.getElementById("my-popup");
let suggestion = document.getElementById("suggestion");
let title = document.getElementById("title");
let btnLeft = myPopup.getElementById("btnLeft");
let btnRight = myPopup.getElementById("btnRight");
let myTime = title.getElementById("header/text");

// Show the popup
myPopup.style.display = "inline";
suggestion.style.display = "inline";
title.style.display = "none";
btnLeft.style.display = "none";
btnRight.style.display = "none";

document.onkeypress = function(e) {
  console.log("Key pressed: " + e.key);
  if(e.key == "up"){
    suggestion.style.display = "inline";
    title.style.display = "none";
    btnLeft.style.display = "none";
    btnRight.style.display = "none";     
  }else if (e.key == "down"){
    suggestion.style.display = "none";
    title.style.display = "inline";
    btnLeft.style.display = "inline";
    btnRight.style.display = "inline"; 
  }
}

var count;
var interval = null;
var counting =false;

btnLeft.onclick = function(evt) {
  console.log("pad");
  if(!counting){
    count=4;
    interval = setInterval(updateDisplay, 1000);
    counting=true;
  }
}

btnRight.onclick = function(evt) {
  console.log("tampon");
  if(!counting){
    count=6;
    interval = setInterval(updateDisplay, 1000);
    counting=true;
  }
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
      counting=false;
    }
  }
}
"use strict";

window.onload = setup;

function setup() {
  console.log("Taking attendance... Present!")

  for (let i = 0; i < 1001; i++){
    let pixel = document.createElement('div');
    pixel.setAttribute ('class', 'pixel');
    pixel.addEventListener('mouseover', paint);

    document.body.appendChild(pixel);

  }

}

function paint(e) {
    let pixel = e.target;
    pixel.style.backgroundColor = 'white';

    setTimeout(resetPixel,1000,pixel);

}

function resetPixel(pixel) {
  pixel.style.backgroundColor = 'black';


}

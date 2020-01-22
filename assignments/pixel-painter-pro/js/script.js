"use strict";

window.onload = setup;

function setup() {

  console.log("Taking attendance... Present!");

  for (let i = 0; i < 1001; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.addEventListener('mouseover', paint);

    document.body.appendChild(pixel);

  }

}


function paint(e) {
  let pixel = e.target;

  let colorR = Math.random() * 255;
  let colorG = Math.random() * 255;
  let colorB = Math.random() * 255;

  console.log(`Color R... ${colorR}`);
  console.log(`Color G... ${colorG}`);
  console.log(`Color B... ${colorB}`);

  pixel.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;

  console.log(`Background color is: ${pixel.style.backgroundColor}`);

  setTimeout(resetPixel, 2000, pixel);

}

function resetPixel(pixel) {
  pixel.style.backgroundColor = 'black';


}

"use strict";


// I'm a little unsure of why we need to use this and can't just set it?
let rotation = 0;

// Our current key variable
let currentKey = '';

// This will have us rotating our pixels.
document.addEventListener("keydown", rotate);

// Here's our event which displays the current key added.
document.addEventListener("keydown", typed);


// Let's only load stuff when we're ready to!
window.onload = setup;

function setup() {

  console.log("Taking attendance... Present!");

  // A little loop to build all our pixels for us.
  for (let i = 0; i < 1001; i++) {

    // We'll create them using a div box!
    let pixel = document.createElement('div');

    // We'll call give it the pixel class name.
    pixel.setAttribute('class', 'pixel');

    // we'll add an eventListener to call the paint function on mouseover.
    pixel.addEventListener('mouseover', paint);

    // Here's our event which removes the pixel.
    pixel.addEventListener('click', remove);

    // Here's our event which adds text to the pixel.
    pixel.addEventListener('mouseover', addText);

    // But why doesn't rotation work when I add an eventListener to pixel
    // with how I have it in this next line?
    // pixel.addEventListener('keydown', rotate);

    // Anyways, we'll add all of this pixels to the document.
    document.body.appendChild(pixel);

  }

}

// Here's how our random-color painting function will work.
function paint(e) {

  // The pixel variable is the div we created, and we'll define it as the target
  let pixel = e.target;

  // Random colors!
  let colorR = Math.random() * 255;
  let colorG = Math.random() * 255;
  let colorB = Math.random() * 255;

  // Let's see what this Math function is actually producing.

  console.log(`Color R... ${colorR}`);
  console.log(`Color G... ${colorG}`);
  console.log(`Color B... ${colorB}`);

  // We'll set the background color of the pixel in CSS.
  // We use, what's it called? Object literals with the backtick?

  pixel.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;

  // Let's see what the results look like.

  console.log(`Background color is: ${pixel.style.backgroundColor}`);

  // Okay, now let's go back to normal after 2 seconds.

  setTimeout(resetPixel, 2000, pixel);

}

// Here's our rotate function.

function rotate(e) {

  // Group all the pixels together
  let pixels = document.getElementsByClassName("pixel");

  // Only rotate if they pressed right arrow key

  if (e.keyCode === 39) {

    rotation++;

    console.log(`Are we rotating clockwise?`);


  }

  // Only rotate if they pressed left arrow key

  if (e.keyCode === 37) {

    rotation--;

    // pixel.style.transform = `rotate(-10deg)`;

    console.log(`Are we rotating counter-clockwise?`);


  }

  // Get all the pixels into an array (getElementsByClassName)
  // Loop through all the pixels in the array
  // For each one, set its style.transform to be rotated by "rotation" degrees


  setTimeout(resetPixel, 2000, pixel);

}

// Our reset function. What's the difference between using e or pixel?

function resetPixel(pixel) {
  pixel.style.backgroundColor = 'black';
  pixel.style.transform = 'rotate(0deg)';
  // pixel.innerHTML = currentKey;

}

// How our remove function works.
function remove(e) {
  let pixel = e.target;
  pixel.style.opacity = '0';
  console.log("Are we removing the pixel?");

}

// How our typed function works.
function typed(e) {
  if (e.keyCode === 39) {
    currentKey = 39;
  }

  if (e.keyCode === 37) {
    currentKey = 37;
  }
}


// How our addText function works
function addText(e) {
  let pixel = e.target;
  // pixel.innerHTML = currentKey;

}

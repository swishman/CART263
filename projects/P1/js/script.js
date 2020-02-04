"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

function setup() {

$(window).scroll(function() {
  parallax();

})

}

function parallax() {

  // Here, we'll calculate how far we've scrolled from the top of the window.
  // When it loads, the window is at point 0.

  let scrollHeight = $(window).scrollTop();
  const HER_LOVE = 100;
  const HIS_LOVE = 25;
  console.log("scrollHeight:" + scrollHeight);

  // Now, let's select the div containing our lovely wife, Merope.
  // Merope is contained inside a div with the ID, "girl".
  // We'll use our scroll distance calculation to displace her position
  // through CSS.

  // We can control the speed of the animation by changing the integer
  // that we use to divide scrollHeight. We also multiply this by -1,
  // so that Merope scrolls down, as we scroll down.

  $("#girl").css("top", (1*scrollHeight/HER_LOVE));

  // This box, contains Sisyphus. His div id is "boy".
  // Let's displace his position using the same function.

  $("#boy").css("bottom", (1*scrollHeight/HIS_LOVE));

}

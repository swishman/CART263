"use strict";

/********************************************************************

Explorations with scrollTop
Matthew Fishman

A parallax scrolling experiment.

*********************************************************************/

//

let girlScale = 1;
let opacity = 1;
let rotateNumber = 0;

// Let's get this document ready.

$(document).ready(setup);

// Our setup function.

let scrollTop = 0;
let scrollDifference = 0;
const eltonJohnTrack = new Audio("assets/sounds/EltonJohn.mp3");

function setup() {

  $('#question').dialog({
    buttons: {
      "Fuck Yeah": function() {
        $(this).dialog('close'),
        playElton(),
        curtainsUp();
      },
      "Nah": function() {
        $(this).parent().effect('shake');
      }
    },
  });


  // return;
  // Okay, so when the window scrolls, we're gonna make some things happen.

  $(window).scroll(function(e) {


    // Trying to get this jquery dialog to display in the center!



    // console.log(e);

    // Let's store how far away we move from the top of the window as we scroll down.
    // We'll also store what direction the user is scrolling in.

    let newScrollTop = $(window).scrollTop();
    scrollDifference = newScrollTop - scrollTop;
    scrollTop = newScrollTop;

    console.log(scrollDifference);

    // Now, let's call our parallaxScroll function (see more details below).
    // This function makes use of scrollTop to adjust the speed of scrolling
    // DOM elements.

    parallaxScroll();

    // We also have parallaxGrow, which scales objects based on scroll
    // direction.

    parallaxRotate();


    parallaxGrow();

    // All of these functions are happening throughout the entirety of
    // the document. That is, even when they're not in view, they're happening.
    // But what if we want to only call scrolling functions in certain
    // areas of the page?

    // We'll  need to keep track of how far we are along in our story.
    // Let's check and make sure with some if() statements.

    // Our finale container.

    if (scrollTop > $("#endcontainer").position().top) {
      console.log("end container");

      // Here, we can perform functions when this container comes into view.

      // Let's apply some jQuery animations to an HTML button.

      $("#endbutton")
        .hide()
        .fadeIn(1000);

      // When you click that button, it brings us back to the top of the page.
      // Is this particularly Sisyphean? I really hope so.

      $("#endbutton").click(function() {
        window.location = '#start'
      })

    }


    // Our midway through container.
    else if (scrollTop > $("#middlecontainer").position().top) {
      console.log("middle container");

      // Here, we have parallaxRotate, which, you guessed it! Rotates elements
      // as we scroll up and down the page.



    } else if (scrollTop > $("#beginning").position().top) {
      console.log("beginning");

      // This is parallaxOpacity, which, you know... does what it says it
      // says it's gonna do!

      parallaxOpacity();


    }


  })




}

function parallaxScroll() {

  // So, let's make sure scrolLTop is still what it needs to be here.

  let scrollTop = $(window).scrollTop();
  const HER_LOVE = 100;
  const HIS_LOVE = 25;

  // We can control the speed of the animation by changing the integer
  // that we use to divide scrollTop.

  // Now, let's select the div containing our lovely wife, Merope.
  // Merope is contained inside a div with the ID, "girl".
  // We'll use scrollTop to displace her position
  // through CSS.

  $("#girl").css("top", scrollTop / HER_LOVE);

  // This box, contains Sisyphus. His div id is "boy".
  // Let's displace his position using the same function.

  $("#boy").css("bottom", scrollTop / HIS_LOVE);

}

// This was some alternative math I experimented with.
// It was essentially calculating the scroll speed using a logarithmic
// function, which as you ScrollTop increases, the scroll speed decreases.
// It worked alright, but I didn't really care much for the results.

// $("#girl").css("top", (1/1+Math.sqrt(scrollHeight)));
// console.log("top:: "+$("#girl").css("top"));
// let cTop = parseFloat($("#girl").css("top"))+(51/Math.sqrt(scrollHeight));
// $("#girl").css("top", cTop);
// console.log(cTop);
//
// console.log((1/Math.sqrt(scrollHeight)));


// Here, we have a function which uses a CSS scale transformation
// to apply shrink / grow animations to elements.

function parallaxGrow() {

  // Set our scale value.

  const SCALE = 0.001;

  // Shrink when we scroll down! The scale is substracted from
  // our global girlScale value.

  if (scrollDifference > 0) {

    console.log("Shrink");

    if (girlScale > 0) {
    girlScale -= SCALE;

  }
    // and Grow when we scroll up. Added to our girlScale value.

  } else if (scrollDifference < 0) {

    console.log("Grow");

    girlScale += SCALE;

  }

  // The value is calculated via if() and then plugged into the CSS transform.

  $("#girl").css("transform", `scale(${girlScale},${girlScale})`);

}


// Our Parallax Rotate.

function parallaxRotate() {

  const ROTATE_VALUE = 10;

  console.log("Rotate");

  rotateNumber += ROTATE_VALUE;

  $("#text").css("transform", `rotate(${rotateNumber}deg)`);

  console.log(rotateNumber);


}

// ParallaxOpacity........ The possibilities are endless!

function parallaxOpacity() {

  const OPACITY_VALUE = 0.1;

  // Hide when we scroll down! The opacity is substracted from
  // our global opacity value.

  if (scrollDifference > 0) {

    console.log("Hide");

      if (opacity > 0) {
    opacity -= OPACITY_VALUE;
      }

    // and Show when we scroll up. Added to our opacity value.

  } else if (scrollDifference < 0) {


    console.log("Show");
      if (opacity < 1) {
    opacity += OPACITY_VALUE;
  }
  }

  $("#beginningtext").css("opacity", opacity);


}

// Play some music

function playElton() {
eltonJohnTrack.play();
}

function curtainsUp() {
  $("#blackout").css("opacity", 0);

}

"use strict";

/*****************

Raving Redactionist
Pippin Barr

You are redacting a document, but it keeps becoming unredacted!
Click the secret information to hide it, don't let all the
secrets become revealed!

******************/

// The chance a span will be revealed per update
const REVEAL_POSSIBILITY = 0.1;
// How often to update the spans (potentially revealing them)
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all spans
let $spans;

// Keeping track of what's been found so far
let totalSecrets;
let foundSecrets;


// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the click handler and starts the time loop
function setup() {
  // Save the selection of all spans (since we do stuff to them multiple times)
  $spans = $('span');
  // Set a click handler on the spans (so we know when they're clicked)
  $spans.on('click', spanClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  setInterval(update, UPDATE_FREQUENCY);

  // Let's  select all the secrets and take a count to see how many we're
  // really working with here!
  totalSecrets = $(".secret").length;
  console.log(totalSecrets);


  // This sets the length of that selection to that secret counter(?)
  $("#totalSecretsValue").text(totalSecrets);

  // Here we'll decide what to do to those secrets... a mouseover!
  $('.secret').on('mouseover', secretsMouseover);

};

// spanClicked()
//
// When a span is clicked we remove its revealed class and add the redacted class
// thus blacking it out
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update() {
  $spans.each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
function updateSpan() {
  let r = Math.random();
  if (r < REVEAL_POSSIBILITY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

// Remember that mouseover decision we made? Well, here's what happens.
function secretsMouseover() {
console.log("Moused over!");
$(this).removeClass("secret");
$(this).addClass("foundSecrets");
$(this).off('mouseover');

foundSecrets = $(".foundSecrets").length;
console.log("Secrets you found:" + foundSecrets);

$("#foundSecretsValue").text(foundSecrets);


}

// A version using anonymous functions if you're interested:

// $(document).ready(function () {
//   $spans = $('span');
//
//   $spans.on('click',function () {
//     $(this).removeClass('revealed');
//     $(this).addClass('redacted');
//   });
//
//   setInterval(function () {
//     $spans.each(function () {
//       let r = Math.random();
//       if (r < REVEAL_POSSIBILITY) {
//         $(this).removeClass('redacted');
//         $(this).addClass('revealed');
//       }
//     });
//   },UPDATE_FREQUENCY);
// });

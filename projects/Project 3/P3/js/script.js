"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);


function setup() {

  $.ajax({
    url: '../assets/data/gundam.txt', // Location of the file
    dataType: 'text' // The type of data we're requesting
  })
  .done(gotData)
  .fail(dataError);

  $( function() {
   $( "#tabs" ).tabs();
 } );

}

function gotData(data) {
  startTyping(data);
}

function dataError() {
  console.error("Boo!");
}

function startTyping(text) {
  let next = 0;
  let typingInterval = setInterval(function() {
    $('#gundam').append(text[next]);
    console.log(text[next]);
    next++;
    if (next === text.length) {
      clearInterval(typingInterval);
    }
  }, 0.1);

}

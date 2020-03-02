"use strict";

/********************************************************************

Explorations with scrollTop
Matthew Fishman

A parallax scrolling experiment.

*********************************************************************/

//


// Let's get this document ready.

$(document).ready(setup);

function setup() {

  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var cody = {
      'hello :name': helloFunction,
      'howdy': helloFunction
    };
    var cassandra = {
      'hi': helloFunction
    };
    var jeff = {
      'I give up': iGiveUp
    };

    annyang.addCommands(cody);
    annyang.addCommands(cassandra);
    annyang.addCommands(jeff);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();

  }

  $(function() {
    $("#tabs").tabs();
  });

  $(function() {
    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").click(function(event) {
      event.preventDefault();
    });
  });

}

function helloFunction() {
  console.log("i hear ya!");
}

function iGiveUp() {
  console.log("Another function!");
}

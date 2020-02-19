"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


$(document).ready(setup);


function setup() {

  if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
var commands = {'hello :name': helloFunction, 'howdy': helloFunction};
var commands2 = {'hi': helloFunction};


annyang.addCommands(commands);
annyang.addCommands(commands2);

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
}

function helloFunction() {
  responsiveVoice.speak("Hello, how's it going?");

}

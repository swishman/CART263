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

    // Let's define the commands that Codey responds to.
    var codey = {
      "hello Codey": function() {
        greeting("codey");
      },
      "Howdy Codey": function() {
        greeting("codey");
      },
      "Codey, what's your favourite food?": function() {
        food("codey");
      },
      "Codey what do you like watching on TV": function() {
        television("codey");
      },
      "Codey, What books do you like to read": function() {
        books("codey")
      }

    }; // end of Codey

    // Let's define the commands that Jodey responds to.

    var jodey = {
      "hello Codey": function() {
        greeting("codey");
      },
      "Howdy Codey": function() {
        greeting("codey");
      },
      "Codey, what's your favourite food?": function() {
        food("codey");
      },
      "Codey what do you like watching on TV": function() {
        television("codey");
      },
      "Codey, What books do you like to read": function() {
        books("codey")
      }

    }; // end of Jodey

    // Let's define the commands that Jodey responds to.
    var jeff = {
      "hello Codey": function() {
        greeting("codey");
      },
      "Howdy Codey": function() {
        greeting("codey");
      },
      "Codey, what's your favourite food?": function() {
        food("codey");
      },
      "Codey what do you like watching on TV": function() {
        television("codey");
      },
      "Codey, What books do you like to read": function() {
        books("codey")
      }

    };

    annyang.addCommands(codey);
    annyang.addCommands(jodey);
    annyang.addCommands(jeff);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();

  }


  // This creates our intro paragraph using a single tab.

  $(function() {
    $("#tabs").tabs();
  });

  // This configures our intro button.

  $(function() {
    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").click(function() {
      window.location = '#first'
    });
  });

  // This creates our Codey paragraph using a single tab.

  $(function() {
    $("#codeyText").tabs();
  });

  // This creates our Jodey paragraph using a single tab.

  $(function() {
    $("#jodeyText").tabs();
  });



}

// Here we define the greeting function. This function provides responses
// to each personality to be used with ResponsiveVoice,
// based on the parameters returned from the anonymous function mentioned
// in annyang's commands() above.

function greeting(e) {

  // This is Codey's television answer.

  if (e === "codey") {

    responsiveVoice.speak("My greeting response.", "US English Male", {
      pitch: 1.75,
      rate: 0.75,

    });


  }

  // This is Jodey's television answer.

  if (e === "jodey") {
    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Female", {
      pitch: 1.75,
      rate: 0.75,

    });

  }

  // This is Brody's television answer.

  if (e === "brody") {

    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Female", {
      pitch: 1.75,
      rate: 0.75,

    });

  }

} // End of the greetings function.

// Here we define the books function. This function provides responses
// to each personality to be used with ResponsiveVoice,
// based on the parameters returned from the anonymous function mentioned
// in annyang's commands() above, in annyang.

function books(e) {

  // This is Codey's television answer.

  if (e === "codey") {

    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Male", {
      pitch: 1.75,
      rate: 0.75,

    });


  }

  // This is Jodey's television answer.

  if (e === "jodey") {
    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Female", {
      pitch: 1.75,
      rate: 0.75,

    });

  }

  // This is Brody's television answer.

  if (e === "brody") {

    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Female", {
      pitch: 1.75,
      rate: 0.75,

    });

  }

} // End of the books function.

// Here we define the television function. This function provides responses
// to each personality to be used with ResponsiveVoice,
// based on the parameters returned from the anonymous function mentioned
// in annyang's commands() above, in annyang.

function television(e) {

  console.log(e);

  // This is Codey's television answer.

  if (e === "codey") {

    responsiveVoice.speak("I like to watch Reboot, and Ryan's Toy Videos. ", "US English Male", {
      pitch: 1.75,
      rate: 0.75,

    });


  }

  // This is Jodey's television answer.

  if (e === "jodey") {
    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Female", {
      pitch: 1.75,
      rate: 0.75,

    });

  }

  // This is Brody's television answer.

  if (e === "brody") {

    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Female", {
      pitch: 1.75,
      rate: 0.75,

    });

  }

} // end of Television function.

// Here we define the food function. This function provides responses
// to each unique personality to be used with ResponsiveVoice,
// based on the parameters returned from the anonymous function mentioned
// in annyang's commands() above, in annyang.

function food(e) {

  // This is Codey's television answer.

  if (e === "codey") {

    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Male", {
      pitch: 1.75,
      rate: 0.75,

    });


  }

  // This is Jodey's television answer.

  if (e === "jodey") {
    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Female", {
      pitch: 1.75,
      rate: 0.75,

    });

  }

  // This is Brody's television answer.

  if (e === "brody") {

    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Female", {
      pitch: 1.75,
      rate: 0.75,

    });

  }

} // end of the Food function.

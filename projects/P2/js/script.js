"use strict";

/********************************************************************

Explorations with scrollTop
Matthew Fishman


*********************************************************************/

//

let names = ["cody",
  "jody",
  "brody"
];


let questions = [
  "What's your favourite food",
  "What do you like watching on TV",
  "What books do you like to read"
];


// Let's get this document ready.

$(document).ready(setup);

function setup() {

  if (annyang) {

    // Let's define the commands that cody responds to.
    var cody = {
      "hello cody": function() {
        greeting("cody");
      },
      "Howdy cody": function() {
        greeting("cody");
      },
      "cody what's your favourite food": function() {
        food("cody");
      },
      "cody what do you like watching on TV": function() {
        television("cody");
      },
      "cody What books do you like to read": function() {
        books("cody")
      }

    }; // end of cody

    // Let's define the commands that jody responds to.

    var jody = {
      "hello jody": function() {
        greeting("jody");
      },
      "Howdy jody": function() {
        greeting("jody");
      },
      "jody what's your favourite food": function() {
        food("jody");
      },
      "jody what do you like watching on TV": function() {
        television("jody");
      },
      "jody What books do you like to read": function() {
        books("jody")
      }

    }; // end of jody

    // Let's define the commands that jody responds to.
    var brody = {
      "hello brody": function() {
        greeting("brody");
      },
      "Howdy brody": function() {
        greeting("brody");
      },
      "brody what's your favourite food?": function() {
        food("brody");
      },
      "brody what do you like watching on TV": function() {
        television("brody");
      },
      "brody What books do you like to read": function() {
        books("brody")
      }

    };

    annyang.addCommands(cody);
    annyang.addCommands(jody);
    annyang.addCommands(brody);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
    annyang.debug();

  }


  // This creates our intro paragraph using a single tab.

  $(function() {
    $("#tabs").tabs();
  });

  // This configures our intro button.

  $(function() {
    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").click(function() {
      computerAsk();
    });
  });

  // This creates our cody paragraph using a single tab.

  $(function() {
    $("#codyText").tabs();
  });


}

// Here is the machine voice. This is the voice which asks the questions
// when you click "Ask a Question".

function computerAsk() {

  // Use the getRandomElement function to search the "questions" array.
  // Ditto for the "names" array.
  // When you have a name and a question, put them into the query variable
  // RV will read it out loud.

  let chosenQuestion = getRandomElement(questions);
  let chosenName = getRandomElement(names);
  let query = `${chosenName} ${chosenQuestion}`;

  responsiveVoice.speak(query, "US English Female", {
    pitch: 1,
    rate: 1

  });

}

// This is how the getRandomElement works.

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}


// Here we define the greeting function. This function provides responses
// to each personality to be used with ResponsiveVoice,
// based on the parameters returned from the anonymous function mentioned
// in annyang's commands() above.

function greeting(e) {

  // This is cody's greeting.

  if (e === "cody") {

    $("#personality").attr("src", "/../assets/images/child.png");

    responsiveVoice.speak("Hello! My name's Cody. I am seven years old.", "US English Male", {
      pitch: 1.75,
      rate: 0.75

    });


  }

  // This is jody's greeting.

  if (e === "jody") {

    $("#personality").attr("src", "/../assets/images/woman.png");

    responsiveVoice.speak("A pleasure to meet you. My name's jody. I am a 29 year old P H D student finishing my degree in the United States.", "UK English Female", {
      pitch: 1,
      rate: 1

    });

  }

  // This is brody's greeting.

  if (e === "brody") {

    $("#personality").attr("src", "/../assets/images/Male.png");

    responsiveVoice.speak("Name's brody. I'm 47. I've struggled with alcohol for the past little while but I'm well on my way to sobriety. I've been dry for about seven months now. I live in a double-wide outside Sunnyvale Trailer Park.", "US English Female", {
      pitch: 0.75,
      rate: 1.05

    });

  }

} // End of the greetings function.

// Here we define the books function. This function provides responses
// to each personality to be used with ResponsiveVoice,
// based on the parameters returned from the anonymous function mentioned
// in annyang's commands() above, in annyang.

function books(e) {

  // This is cody's book answer.

  if (e === "cody") {

    $("#personality").attr("src", "/../assets/images/child.png");

    responsiveVoice.speak("I like reading Star Wars books, I read them with my older brother. I like Jar Jar Binks.", "US English Male", {
      pitch: 1.75,
      rate: 0.75

    });


  }

  // This is jody's book answer.

  if (e === "jody") {

    $("#personality").attr("src", "/../assets/images/woman.png");

    responsiveVoice.speak("Honestly, I'm not much of a reader. I don't care for fiction really, but I love reading Wikipedi articles. Topics that interest me are great, but I find it hard to dive into things I don't already know about.", "UK English Female", {
      pitch: 1,
      rate: 1

    });

  }

  // This is brody's books answer.

  if (e === "brody") {

    $("#personality").attr("src", "/../assets/images/Male.png");

    responsiveVoice.speak("I read the paper a lot. I tried getting onto the Apple News thing but I found it annoying. They are always sending notifications to my phone. Sometimes I listen to audiobooks.", "US English Female", {
      pitch: 0.75,
      rate: 1.05

    });

  }

} // End of the books function.

// Here we define the television function. This function provides responses
// to each personality to be used with ResponsiveVoice,
// based on the parameters returned from the anonymous function mentioned
// in annyang's commands() above, in annyang.

function television(e) {

  console.log(e);

  // This is cody's television answer.

  if (e === "cody") {

    $("#personality").attr("src", "/../assets/images/child.png");

    responsiveVoice.speak("I like to watch Reboot, and Ryan's Toy Videos. My mom gives me her iPad and I go on Youtube.", "US English Male", {
      pitch: 1.75,
      rate: 0.75,

    });


  }

  // This is jody's television answer.

  if (e === "jody") {

    $("#personality").attr("src", "/../assets/images/woman.png");

    responsiveVoice.speak("There's a lot of good stuff on television! The most recent show I watched is You, it's about this psycho stalker boyfriend named Ben who like kills people to get with the girls he likes. It's super creepy and scary to watch. I like to watch makeup video tutorials on Youtube, those are always super interesting and they have a lot of useful tips.", {
      pitch: 1,
      rate: 1,

    });

  }

  // This is brody's television answer.

  if (e === "brody") {

    $("#personality").attr("src", "/../assets/images/Male.png");

    responsiveVoice.speak("I watch a lot of News, I guess. Usually C N N. I can't stand watching Fox, they're all a bunch of bigots. Their ideas are stupid. Bill O'Reilly makes me laugh, I consider him comedy. That's what you need to produce to reach some of the more conservative viewers in the States. Some bigotry packaged in some comedy. It's always a guarantee. And I also enjoy watching sports. I don't play a lot of them but I would like to find more ways to be active in the new year. ", "US English Female", {
      pitch: 0.75,
      rate: 1.05,

    });

  }

} // end of Television function.

// Here we define the food function. This function provides responses
// to each unique personality to be used with ResponsiveVoice,
// based on the parameters returned from the anonymous function mentioned
// in annyang's commands() above, in annyang.

function food(e) {

  // This is cody's food answer.

  if (e === "cody") {

    $("#personality").attr("src", "/../assets/images/child.png");

    responsiveVoice.speak("I like pizza, cheese pizza. My favourite is cheese pizza, I love to eat it when my friends come over.", "US English Male", {
      pitch: 1.75,
      rate: 0.75,

    });


  }

  // This is jody's food answer.

  if (e === "jody") {

    $("#personality").attr("src", "/../assets/images/woman.png");

    responsiveVoice.speak("My favourite food? That's a hard question! Uhm. I love the poké restaurant down the street. I like a lot of different things. I follow a couple of foodie instagram blogs -- it's local -- they always have cool suggestions for me to try. I like the idea of food that is sourced locally. It seems crazy to me that when I go to the grocery store, I have fruits and vegetables that had to be shipped across the Pacific ocean to get here. I try to eat organic when I can.", "UK English Female", {
      pitch: 1,
      rate: 1,

    });

  }

  // This is brody's food answer.

  if (e === "brody") {

    $("#personality").attr("src", "/../assets/images/Male.png");

    responsiveVoice.speak("I hate cooking, I usually just want something fast and easy to make. I eat a lot of frozen pizza and chicken nuggets. I eat out sometimes but I am trying to stop because it costs a lot of money ", "US English Male", {
      pitch: 0.75,
      rate: 1.05,

    });

  }

} // end of the Food function.

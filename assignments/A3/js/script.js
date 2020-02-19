"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let animals = [  "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"];

let buttons = [];
const NUM_OPTIONS = 5;
let $correctButton;

$(document).ready(setup);


function setup() {


$(document).one("click", newRound);

if (annyang) {
// Let's define our first command. First the text we expect, and then the function it should call
var commands = {'hello :name': helloFunction, 'howdy': helloFunction};
var commands2 = {'hi': helloFunction};
var commands3 = {'I give up': iGiveUp};


annyang.addCommands(commands);
annyang.addCommands(commands2);
annyang.addCommands(commands3);


// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
}


}

function addButton(label) {

  let $button = $('<div></div>');
  $button.addClass("guess");
  $button.text(label);
  $button.button();
  $button.appendTo("body");
  $button.on("click", handleGuess);
  return $button;

}

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}


function newRound() {
  buttons = [];

  for (let i = 0; i < NUM_OPTIONS; i++) {

    let animalName = getRandomElement(animals);
    let $button = addButton(animalName);
    buttons.push($button);

}

$correctButton = getRandomElement(buttons);

sayBackwards($correctButton.text());

}

function handleGuess() {
  if ($(this).text() === $correctButton.text()) {
    $(".guess").remove();
    setTimeout(newRound, 100);

  }
}

function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');

  responsiveVoice.speak(backwardsText, "UK English Male", {
    pitch: 0.9,
    rate: 1

  });

}

function helloFunction() {
  responsiveVoice.speak("Hello, how's it going?");
}

function iGiveUp() {
  responsiveVoice.speak("You give up? Why?");

}

"use strict";

/********************************************************************

Explorations with scrollTop
Matthew Fishman

A parallax scrolling experiment.

*********************************************************************/

// Let's get this document ready.

$(document).ready(setup);

// Our setup function.

function setup() {


  // Okay, so when the window scrolls, we're gonna make some things happen.

  $(window).scroll(function() {

    // Let's store how far away we move from the top of the window as we scroll down.

    let scrollTop = $(window).scrollTop();

    // Now, let's call our parallaxScroll function (see more details below).
    // This function makes use of scrollTop to perform transformations to
    // DOM elements.

    parallaxScroll();

    // We also want to keep track of how far we are along our story.
    // Let's check and make sure with some if() statements.

    // Our finale container.

    if (scrollTop > $("#endcontainer").position().top) {
      console.log(" red container");

      // Here, we can perform functions when this container comes into view.

      $("#endbutton")
        .hide()
        .fadeIn(1000);

      $("#endbutton").click(function() {
        window.location = '#start'
      })

    }

    // Our midway through container.
    else if (scrollTop > $("#middlecontainer").position().top) {
      console.log(" yellow container");


    }


  })


        $('#question').dialog({
      buttons: {
        "Good": function() {
          $(this).dialog('close');
        },
        "Bad": function() {
          $(this).parent().effect('shake');
        }
      }
    });


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

  $("#text").css("transform", 'rotateY(' + (scrollTop / 100) + 'rad)');

}


  // This was some alternative math I experimented with.

  // $("#girl").css("top", (1/1+Math.sqrt(scrollHeight)));
  // console.log("top:: "+$("#girl").css("top"));
  // let cTop = parseFloat($("#girl").css("top"))+(51/Math.sqrt(scrollHeight));
  // $("#girl").css("top", cTop);
  // console.log(cTop);
  //
  // console.log((1/Math.sqrt(scrollHeight)));



// Here, we have a function which uses a CSS scale transformation
// to apply some effects to elements.

function parallaxGrow() {

  $("girl").css("transform", 'scale(1,1)');
  let cTop = parseFloat($("#girl").css("transform")) + ('scale(' + (-1 * scrollHeight) + ')');

  $("#girl").css("transform", cTop);


}

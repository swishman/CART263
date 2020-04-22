"use strict";

/********************************************************************

Design Auathority Beta Version 1
Matthew

*********************************************************************/

$(window).ready(setup);



function setup() {

  $.ajax({
    url: '../assets/data/gundam.txt', // Location of the file
    dataType: 'text' // The type of data we're requesting
  })
  .done(gotData)
  .fail(dataError);



  //  Creating our tabs

  $( function() {
   $( "#tabs" ).tabs();
 } );


  // Creating our Values dialogue

  $( function() {
     $( "#values-dialog" ).dialog({
       autoOpen: true,
       position: {  my: "center+300",
   at: "bottom-350" },
       show: {
         effect: "fold",
         duration: 1500
       },
       hide: {
         effect: "fold",
         duration: 100
       },
       minWidth: 500,
       maxHeight: 400,
       resizable: false,
       open: function() {$(".ui-dialog").addClass("ui-dialog-shadow");},
       close:  function() {$("#six").show(400);}

     });

 // Configuring how to open our Values Dialog

     $( "#values" ).on( "click", function() {
       $( "#values-dialog" ).dialog( "open" );
     });
   } );

   // Creating our Contact dialogue

   $( function() {
      $( "#contact-dialog" ).dialog({
        autoOpen: true,
        position: {  my: "center-350",
    at: "top+250" },
        show: {
          effect: "fold",
          duration: 2000
        },
        hide: {
          effect: "fold",
          duration: 200
        },
        minWidth: 500,
        maxHeight: 400,
        resizable: false,
        open: function() {$(".ui-dialog").addClass("ui-dialog-shadow");},
        close:  function() {$("#six").show(400);}


      });

  // Our Contact Dialog

      $( "#contact" ).on( "click", function() {
        $( "#contact-dialog" ).dialog( "open" );
      });
    } );


    // Creating our Services dialogue

    $( function() {
       $( "#services-dialog" ).dialog({
         autoOpen: true,
         position: {  at: "center-20% center+150" },
         show: {
           effect: "fold",
           duration: 1000
         },
         hide: {
           effect: "fold",
           duration: 200
         },
         minWidth: 500,
         maxHeight: 400,
         resizable: false,
         open: function() {$(".ui-dialog").addClass("ui-dialog-shadow");},
         close:  function() {$("#six").show(400);}

       });

   // Configuring how to open our Services Dialog

       $( "#services" ).on( "click", function() {
         $( "#services-dialog" ).dialog( "open" );
       });
     } );


 // Follow the mouse!

 // $(document).on('mousemove', function(e){
 //     $('#gundam').css({
 //        left:  e.pageX,
 //        top:   e.pageY
 //     });
 // });


} // End of setup function.

// Handling the text received by ajax

function gotData(data) {
  startTyping(data);
}

// Handling the text received by ajax in case of failure

function dataError() {
  console.error("Boo!");
}

// Ascii Art Animation

function startTyping(text) {
  let next = 0;
  let typingInterval = setInterval(function() {
    if(text[next]==="\n"){
      console.log("line break");
        $('#gundam').append("<br />");
    }
    else if (text[next]===" "){
    $('#gundam').append("&nbsp;");

  }
    else{
    $('#gundam').append(text[next]);
  }
  //  console.log(text[next]);
    next++;
    if (next === text.length) {
      clearInterval(typingInterval);
    }
  }, 0.5);


// ROARING TIDES ANIMATE

let path = document.querySelector(".ROARING_TIDES");
let length = path.getTotalLength();
// console.log(length);

path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;

// Checks to see if UI close button is clicked.
// If it is, it'll show the navigation in the right-hand corner.



}

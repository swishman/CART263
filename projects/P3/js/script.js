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


  //  Creating our tabs

  $( function() {
   $( "#tabs" ).tabs();
 } );

 // Creating our dialogue

 $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });

    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

  // Handling the configuration of our graphs

 var options = {
 	animationEnabled: true,
  backgroundColor: "black",

 	title:{
 		text: "Monthly Sales - 2017"
 	},
 	axisX: {
 		valueFormatString: "MMM"
 	},
 	axisY: {
 		title: "Sales (in USD)",
 		prefix: "$",
 		includeZero: false
 	},
 	data: [{
 		yValueFormatString: "$#,###",
 		xValueFormatString: "MMMM",
    color: "white",
 		type: "spline",
 		dataPoints: [
 			{ x: new Date(2017, 0), y: 25060 },
 			{ x: new Date(2017, 1), y: 27980 },
 			{ x: new Date(2017, 2), y: 33800 },
 			{ x: new Date(2017, 3), y: 49400 },
 			{ x: new Date(2017, 4), y: 40260 },
 			{ x: new Date(2017, 5), y: 33900 },
 			{ x: new Date(2017, 6), y: 48000 },
 			{ x: new Date(2017, 7), y: 31500 },
 			{ x: new Date(2017, 8), y: 32300 },
 			{ x: new Date(2017, 9), y: 42000 },
 			{ x: new Date(2017, 10), y: 52160 },
 			{ x: new Date(2017, 11), y: 49400 }
 		]
 	}]
 };
 $("#chartContainer").CanvasJSChart(options);

 $(document).on('mousemove', function(e){
     $('#gundam').css({
        left:  e.pageX,
        top:   e.pageY
     });
 });


} // End of setup function.



function gotData(data) {
  startTyping(data);
}

function dataError() {
  console.error("Boo!");
}

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
  }, 0.1);

// ROARING TIDES ANIMATE

let path = document.querySelector(".ROARING_TIDES");
let length = path.getTotalLength();
// console.log(length);

path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;


}

$(document).ready(function(){

  $('#slides').superslides({
      animation:'fade',
      pagination:false
  });

});
$(document).ready(function() {
  $("#carousel").waterwheelCarousel({
    // include options like this:
    // (use quotes only for string values, and no trailing comma after last option)
    // option: value,
    // option: value
  });
});


$(document).ready(function() {
  $("#carousel-second").waterwheelCarousel({
    // include options like this:
    // (use quotes only for string values, and no trailing comma after last option)
    // option: value,
    // option: value
  });
});

jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
    width:jQuery(this).attr('data-percent')
    },6000);
    });


    var modal = document.getElementById('pop-up-window');

// Get the button that opens the modal
var btn = document.getElementById("pop-up");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//When user click go to page portfolio
function showPortFolioIndex() {
    window.location.assign("portfolio-index.html");
  } 
//When user click go to page index.html
  function showIndex() {
    window.location.assign("index.html");
  } 

  //When user click go to page portfolio
function showPortFolioExamples() {
  window.location.assign("portfolio-examples.html");
} 
//Slider Deos img

var nextImg = 0;
carouselOne();

function carouselOne() {
  var i;
  var x = document.getElementsByClassName("deos__img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  nextImg++;
  if (nextImg > x.length) {nextImg = 1}    
  x[nextImg-1].style.display = "block";  
  setTimeout(carouselOne, 5000);    
}
//Slider MCD img
var nextImgSec = 0;
carouselSec();

function carouselSec() {
  var i;
  var x = document.getElementsByClassName("mcd__img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  nextImgSec++;
  if (nextImgSec > x.length) {nextImgSec = 1}    
  x[nextImgSec-1].style.display = "block";  
  setTimeout(carouselSec, 5000);    
}
//Slider Lasta img
var nextImgThi = 0;
carouselTHi();

function carouselTHi() {
  var i;
  var x = document.getElementsByClassName("lasta__img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  nextImgThi ++;
  if (nextImgThi > x.length) {nextImgThi = 1}    
  x[nextImgThi-1].style.display = "block";  
  setTimeout(carouselTHi, 5000);    
}

//Slider City img
var nextImgFou= 0;
carouselFou();

function carouselFou() {
  var i;
  var x = document.getElementsByClassName("city__img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  nextImgFou ++;
  if (nextImgFou > x.length) {nextImgFou = 1}    
  x[nextImgFou-1].style.display = "block";  
  setTimeout(carouselFou, 5000);    
}


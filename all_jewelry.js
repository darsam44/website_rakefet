

$(document).ready(function(){
  $(".pop_image").click(function(){
    var im_src = $(this).attr("src");
    $(".popup").fadeIn();
    $(".popup-contact img").attr("src" , im_src);
  });

  $(document).keyup(function(e){
    if (e.key === "Escape"){
      $(".popup").fadeOut();
    }
  });
  $(".close").click(function(){
      $(".popup").fadeOut();
  });
});

//slider photos
var i =0;
var images = [];
var time = 3000;
var im = document.getElementsByClassName("slide")[0];
var img_1 = document.getElementById("slide_img");

// images
images[0] = 'slider_photos/slider1.jpg';
images[1] = 'slider_photos/slider2.jpg';
images[2] = 'slider_photos/slider3.jpg';
images[3] = 'slider_photos/slider4.jpg';


function slider(){
if ( i < images.length){
  i=i+1;
}
else {
  i=1;
}

document.getElementById("slide_img").src = images[i-1];
}


setInterval(slider, 2500);


/*
var next = document.querySelector(".next");
var photo_1 = document.getElementById('er_1');

next.addEventListener("click" , function(){
  photo_1.src = "images_neckless/earings2_" +3+ ".jpeg";
  document.querySelector("h1").style.color = "red";
});


var i =1;

var photo_1 = document.querySelectorAll(".show-photos")[0];
var next = document.querySelector(".next");

next.addEventListener("click", change_photo_1);


function change_photo_1(){
    if (i < 4){
      i= i+1;
    }
    else{
      i=2;
    }
    console.log(i);
    photo_1.src = "images_neckless/earings2_" +(i-1)+ ".jpeg";
}
*/

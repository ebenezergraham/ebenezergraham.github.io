var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";}

  var outslideIndex = 1;
  outshowSlides(outslideIndex);

  function outplusSlides(n) {
    outshowSlides(outslideIndex += n);
  }

  function outcurrentSlide(n) {
    outshowSlides(outslideIndex = n);
  }

  function outshowSlides(n) {
    var x;
    var outslides = document.getElementsByClassName("outSlides");
    var outdots = document.getElementsByClassName("outdot");
    if (n > outslides.length) {outslideIndex = 1}
      if (n < 1) {outslideIndex = outslides.length}
      for (x = 0; x < outslides.length; x++) {
        outslides[x].style.display = "none";
      }
      for (x = 0; x < outdots.length; x++) {
        outdots[x].className = outdots[x].className.replace(" active", "");
      }
    outslides[outslideIndex-1].style.display = "block";
    outdots[outslideIndex-1].className += " active";}

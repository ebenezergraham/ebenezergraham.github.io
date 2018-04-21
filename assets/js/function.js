var id;
var menu = document.getElementsByClassName('side-menu')[0];
document.onclick = function event(event) {
          id = event.target.id;
          menu = document.getElementsByClassName('side-menu')[0];
          if (id === 'side-menu-close') {
                    console.log('we got in');
                    menu.style.display = 'none';
                    document.getElementById('menu-toggle').style.left = '20px';
          }else if (id === 'menu-toggle') {
                    if (menu.style.width === '200px') {
                              console.log('we got in toggle');
                              menu.style.display = 'none';

                    } else {
                              menu.style.display = 'block';
                              document.getElementById(id).style.left = '250px';
                    }
          }
};
$(document).ready(function(){$('#application-div').verticalTimeline({
  animate: "fade"
});
});

$(document).ready(function(){
$('.owl-carousel').owlCarousel();
});
$(document).ready(function(){
$(function() {
  $("#typed").typed({
    strings: ["Hi There!", "Welcome to Graham's Website!", "I interned at Cim Finance", "And it was an enlightening experience"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity
  });
});
})


$(function(){
 // Add smooth scrolling to all links
 $("a").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
   if (this.hash !== "") {
     // Prevent default anchor click behavior
     event.preventDefault();

     // Store hash
     var hash = this.hash;

     // Using jQuery's animate() method to add smooth page scroll
     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){

       // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
     });
   } // End if
 });
});

window.onscroll = function() {myFunction()};
		
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }
}

/*<<<-----Наповнення----->>>*/

document.querySelectorAll(".projcard-description").forEach(function(box) {
  $clamp(box, {clamp: 6});
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".container2");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// -------------------------------------------------------------------------------------
function createBubble() {
  const section = document.querySelector(".container");
  const createElement = document.createElement("span");
  var size = Math.random() * 60;

  createElement.style.animation = 
    "animation 6s linear infinite";
  createElement.style.width = 180 + size + "px";
  createElement.style.height = 180 + size + "px";
  createElement.style.left = 
    Math.random() * innerWidth + "px";
  section.appendChild(createElement);

  setTimeout(() => {
      createElement.remove();
  }, 4000);
}
setInterval(createBubble, 100);
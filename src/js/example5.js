const slider = document.querySelector('.wrapper-schedule');
const content = document.querySelector('.schedule');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  
};
let stopDragging = function (event) {
  mouseDown = false;

  content.style.cursor = "grab"
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;

  content.style.cursor = "grabbing"
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


/* zoeira */
function blink_text() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);
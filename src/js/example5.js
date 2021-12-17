const slider = $('.wrapper-schedule');
const sliderContent = $('.schedule');

slider['mouseDown'] = false;
slider['startX'] = 0;

function handleStartDragging(event){
  slider.mouseDown = true;  
  slider.startX = event.pageX - slider.offset().left;  
  sliderContent.css('cursor', 'grabbing');
}

function handleStopDragging() { 
  slider.mouseDown = false;
  sliderContent.css('cursor', 'grab'); 
}

function handleDragging(event) {  
  event.preventDefault();

  if(!slider.mouseDown) return;

  const x = event.pageX - slider.offset().left;
  const scroll = x - slider.startX;

  slider.scrollLeft(slider.scrollLeft() - scroll);
  sliderContent.css('cursor', 'grabbing'); 
}

slider.on('mousedown', handleStartDragging);
slider.on('mouseup', handleStopDragging);
slider.on('mouseleave', handleStopDragging);
slider.on('mousemove', handleDragging);

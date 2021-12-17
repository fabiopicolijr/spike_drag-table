const Slider = $('#js_wrapper_schedule');

Slider['mouseDown'] = false;
Slider['startX'] = 0;
Slider['scrolLeftStartX'] = 0;

function handleStartDragging(event){
  Slider.mouseDown = true;    
  Slider.startX = event.pageX - Slider.offset().left;
  Slider.scrolLeftStartX = Slider.scrollLeft();

  $('#js-tbody-table').css('cursor', 'grabbing');
}

function handleStopDragging() { 
  Slider.mouseDown = false;

  $('#js-tbody-table').css('cursor', 'grab'); 
}

function handleDragging(event) {  
  event.preventDefault();

  if(!Slider.mouseDown) return;

  const x = event.pageX - Slider.offset().left;
  const scroll = x - Slider.startX;

  Slider.scrollLeft(Slider.scrolLeftStartX - scroll);
  $('#js-tbody-table').css('cursor', 'grabbing'); 
}

Slider.on('mousedown', handleStartDragging);
Slider.on('mouseup', handleStopDragging);
Slider.on('mouseleave', handleStopDragging);
Slider.on('mousemove', handleDragging);

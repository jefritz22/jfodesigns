// Create a new link element
var link = document.createElement('link');

// Set the attributes for link element 
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/cardSlider.css'; // Specify the path to your CSS file

// Append the link element to the head
document.head.appendChild(link);

const cards = document.querySelectorAll('.cards');

cards.forEach((card) => {



  let isDown = false;
  let startX;
  let scrollLeft;


  const end = () => {
    isDown = false;
    card.style.cursor = 'grab';
  };

  const start = (e) => {
    isDown = true;
    card.style.cursor = 'grabbing';
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = card.scrollLeft;
  };

  const move = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; //scroll-fast
    card.scrollLeft = scrollLeft - walk;
  };

  // Mouse events
  window.addEventListener('mousedown', start);
  window.addEventListener('mouseleave', end);
  window.addEventListener('mouseup', end);
  window.addEventListener('mousemove', move, { passive: false });


  // Touch events
  window.addEventListener('touchstart', start);
  window.addEventListener('touchend', end);
  window.addEventListener('touchmove', move, { passive: false });


});

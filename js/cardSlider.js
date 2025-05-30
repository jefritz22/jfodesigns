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
  card.addEventListener('mousedown', start);
  card.addEventListener('mouseleave', end);
  window.addEventListener('mouseup', end);
  card.addEventListener('mousemove', move, { passive: false });


  // Touch events
  card.addEventListener('touchstart', start);
  card.addEventListener('touchend', end);
  card.addEventListener('touchmove', move, { passive: false });
});


//   SCROLL TRIGGER
const boxes = document.querySelectorAll("img, p, h3, h2, section");

boxes.forEach( (box)=>{

  gsap.from(box, {
      scrollTrigger: box,
      y: 50,
      opacity:0,
      duration: 1
  });

})

// GRADIENT CURSOR
var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

window.addEventListener('load', function () {
    document.getElementById('loading-screen').style.display = 'none';
});
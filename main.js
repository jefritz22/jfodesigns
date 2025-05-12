// EXHIBITION TITLE INTERACTIVITY
const heading = document.querySelector('.exhibition-heading');
heading.innerHTML = heading.textContent.split('').map(letter => `<span>${letter}</span>`).join('');

document.querySelectorAll('.exhibition-heading span').forEach(span => {
  span.addEventListener('mouseenter', () => {
    gsap.to(span, { scale: 1.3, color: "#FA4411", duration: 0.3 });
  });

  span.addEventListener('mouseleave', () => {
    gsap.to(span, { scale: 1, color: "#FA4411", duration: 0.3 });
  });

  let isClicked = false;
  span.addEventListener('click', () => {
    if (!isClicked) {
      gsap.to(span, { rotation: 180, color: "#FA4411", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(span, { rotation: 0, color: "#849E00", duration: 0.5, ease: "power3.out" });
    }
    isClicked = !isClicked;
  });
});

// NAME ANIMATION
gsap.to(".name", {
y: -20,
duration: 3,
ease: "power1.inOut",
yoyo: true,
repeat: -1
});

//   SCROLL TRIGGER
const boxes = document.querySelectorAll("img, p, h3, a, h2");

boxes.forEach( (box)=>{

  gsap.from(box, {
      scrollTrigger: box,
      y: 50,
      opacity:0,
      duration: 1
  });

})


// CURSOR ANIMATION
document.addEventListener('mousemove', (e) => {
const colors = ['#FA4411', '#849E00'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

const circle = document.createElement('div');
circle.classList.add('heart');
circle.style.left = `${e.pageX}px`;
circle.style.top = `${e.pageY}px`;
circle.style.backgroundColor = randomColor;

document.getElementById('heartContainer').appendChild(circle);

setTimeout(() => {
  circle.style.transform = 'translateY(-30px)';
  circle.style.opacity = '0';
}, 50);

setTimeout(() => {
  circle.remove();
}, 300);
});


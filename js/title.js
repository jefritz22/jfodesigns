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
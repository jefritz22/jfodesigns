// EXHIBITION TITLE INTERACTIVITY
const heading = document.querySelector('.exhibition-heading');
heading.innerHTML = heading.textContent.split('').map(letter => `<span>${letter}</span>`).join('');

document.querySelectorAll('.exhibition-heading span').forEach(span => {
  span.addEventListener('mouseenter', () => {
    gsap.to(span, { scale: 1.3, color: "#849E00", duration: 0.3 });
  });

  span.addEventListener('mouseleave', () => {
    gsap.to(span, { scale: 1, color: "#849E00", duration: 0.3 });
  });

  let isClicked = false;
  span.addEventListener('click', () => {
    if (!isClicked) {
      gsap.to(span, { rotation: 180, color: "#671600", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(span, { rotation: 0, color: "#671600", duration: 0.5, ease: "power3.out" });
    }
    isClicked = !isClicked;
  });
});



// TYPING ANIMATION
var typed = new Typed(".auto-type", {
    strings: ["user experience design", "copywriting", "graphic design", "front-end development"],
    typeSpeed:50,
    backSpeed:50,
    loop: true,
})


// VALUE ANIMATION
$("document").ready(function(){
  $width1 = $(".other.jey").css("width");
  $width2 = $(".other.ef").css("width");
  
  $(".other").animate(
  {
    width: '0px', 
    opacity: 0,
    easing: "easein",
   }, 0); 
  
  $("#wrapper").mouseleave(function(){

    $(".other").stop().animate(
    {
      width: "0px", 
      opacity: 0,
      easing: "easein",
     }, 800); 
    
    $("#wrapper").stop().animate(
      {
        width: '135px',
      }, 800);
  });

  $("#wrapper").mouseenter(function(){

    $(".other.jey").stop().animate(
    {
      width: $width1, 
      opacity: '100',
      easing: "easein",
     }, 800); 
    
    $(".other.ef").stop().animate(
    {
      width: $width2, 
      opacity: '100',
      easing: "easein",
     }, 800); 

    $("#wrapper").stop().animate(
      {
        width: '600px',
      }, 800);
  });

});


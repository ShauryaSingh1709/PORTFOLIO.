// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Simple slider scroll for education & skills
const sliders = document.querySelectorAll('.slider-container');
sliders.forEach(slider => {
  let isDown = false;
  let startX, scrollLeft;

  slider.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => isDown = false);
  slider.addEventListener('mouseup', () => isDown = false);
  slider.addEventListener('mousemove', e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
});


function setupSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');

  let index = 0;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlide();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  });

  setInterval(() => {
    index = (index + 1) % images.length;
    updateSlide();
  }, 5000);
}

setupSlider('ownerSlider');
setupSlider('trainerSlider');
setupSlider('familySlider');
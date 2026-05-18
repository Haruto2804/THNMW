const sliderSectionElement = document.querySelector('.slider-section');
const prevBtnElement = document.querySelector('.prevBtn');
const nextBtnElement = document.querySelector('.nextBtn');
const currentSliderItems = document.querySelectorAll('.current-slider-item');
const library = [
  './img/slide_1.jpeg',
  './img/slide_1.jpg',
  './img/slide_2.jpg',
  './img/slide_3.jpg',
  './img/slide_4.jpg',
  './img/slide_5.jpg',
];

let currentIndex = 0;
let isChanging = false;

function renderSlider() {
  sliderSectionElement.style.backgroundImage = `url("${library[currentIndex]}")`;
  currentSliderItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}

function changeSlide(direction) {
  if (isChanging) return;

  isChanging = true;

  
  sliderSectionElement.classList.add('fade-out');

  setTimeout(() => {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = library.length - 1;
    }

    if (currentIndex >= library.length) {
      currentIndex = 0;
    }

   
    renderSlider();

   
    sliderSectionElement.classList.remove('fade-out');

    setTimeout(() => {
      isChanging = false;
    }, 450);
  }, 450);
}

prevBtnElement.addEventListener('click', () => {
  changeSlide(-1);
});

nextBtnElement.addEventListener('click', () => {
  changeSlide(1);
});

renderSlider();
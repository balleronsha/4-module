document.addEventListener('DOMContentLoaded', () => {
  console.log('Скрипт успешно загрузился');

  // Меню
  const menuBtn = document.querySelector('.menubtn1');
  const menu = document.getElementById('menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('show');
    });
  }

  // Клавдия Васильевна
  const bug = document.getElementById('funny-bug');
  const bubble = document.getElementById('speech-bubble');
  const phrases = [
    'Ты лучик жука!',
    'Вперёд, балерина!',
    'Жуки верят в тебя!',
    'Ты сияешь как лампа!',
    'Сегодня твой день!',
    'Никто не остановит тебя!',
    'Сделай это для себя ',
    'Ты не просто жук — ты сверкающий жук!',
  ];
  if (bug && bubble) {
    bug.addEventListener('click', () => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      bubble.textContent = randomPhrase;
      bubble.style.opacity = 1;
      setTimeout(() => {
        bubble.style.opacity = 0;
      }, 2500);
    });
  }

  // Клик по логотипу
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

  // Слайдер
  const track = document.querySelector('.slider-track');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const slides = document.querySelectorAll('.slider-track > div');
  if (track && slides.length > 0 && prevBtn && nextBtn) {
    const slideWidth =
      slides[0].offsetWidth + parseFloat(getComputedStyle(track).gap || '0');
    let currentIndex = 0;

    function updateSliderPosition() {
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });

    // Touch
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      if (endX < startX - 50) nextBtn.click();
      if (endX > startX + 50) prevBtn.click();
    });
  }

  const mainContent = document.querySelector('.filial-main-content');

  // ЛЕС
  const lecpro = document.getElementById('lecpro');
  const lecDesc = document.getElementById('lec-desc');
  const closeLec = document.getElementById('close-desc');
  if (lecpro && lecDesc && mainContent && closeLec) {
    lecpro.addEventListener('click', () => {
      console.log('🌲 Клик по Лесу');
      mainContent.classList.add('hidden');
      lecDesc.classList.add('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    closeLec.addEventListener('click', () => {
      lecDesc.classList.remove('visible');
      mainContent.classList.remove('hidden');
    });
  }

  // ПРУД
  const prudpro = document.getElementById('prudpro');
  const prudDesc = document.getElementById('prud-desc');
  const closePrud = document.getElementById('close-desc0');
  if (prudpro && prudDesc && closePrud && mainContent) {
    prudpro.addEventListener('click', () => {
      console.log('💧 Клик по Пруду');
      mainContent.classList.add('hidden');
      prudDesc.classList.add('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    closePrud.addEventListener('click', () => {
      prudDesc.classList.remove('visible');
      mainContent.classList.remove('hidden');
    });
  }

  // ЛУГ
  const lugpro = document.getElementById('lugpro');
  const lugDesc = document.getElementById('lug-desc');
  const closeLug = document.getElementById('close-desc09');
  if (lugpro && lugDesc && closeLug && mainContent) {
    lugpro.addEventListener('click', () => {
      console.log('🌾 Клик по Лугу');
      mainContent.classList.add('hidden');
      lugDesc.classList.add('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    closeLug.addEventListener('click', () => {
      lugDesc.classList.remove('visible');
      mainContent.classList.remove('hidden');
    });
  }

  function setupAutoSlider(imageId, imageArray) {
    const img = document.getElementById(imageId);
    let index = 0;

    if (img) {
      setInterval(() => {
        img.style.transition = 'opacity 1s ease-in-out';
        img.style.opacity = 0;

        setTimeout(() => {
          index = (index + 1) % imageArray.length;
          img.src = imageArray[index];
          img.style.opacity = 1;
        }, 1000);
      }, 5000);
    }
  }

  // Лес
  setupAutoSlider('autoslide-image', [
    'images/razd1.png',
    'images/razd2.png',
    'images/razd3.png',
  ]);

  // Пруд
  setupAutoSlider('autoslide-image0', [
    'images/razd10.png',
    'images/razd20.png',
    'images/razd30.png',
  ]);

  // Луг
  setupAutoSlider('autoslide-image09', [
    'images/razd109.png',
    'images/razd209.png',
    'images/razd309.png',
  ]);
});
// Клавдия Васильевна даёт предсказания
document.addEventListener('DOMContentLoaded', () => {
  const bug = document.getElementById('funny-bug');
  const bubble = document.getElementById('speech-bubble');

  const phrases = [
    'Ты лучик жука!',
    'Вперёд, балерина!',
    'Жуки верят в тебя!',
    'Ты сияешь как лампа!',
    'Сегодня твой день!',
    'Никто не остановит тебя!',
    'Сделай это для себя 🐞',
    'Ты не просто жук — ты сверкающий жук!',
  ];

  function saySomething() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    bubble.textContent = randomPhrase;
    bubble.style.opacity = 1;

    // Скрываем через 3 секунды
    setTimeout(() => {
      bubble.style.opacity = 0;
    }, 2500);
  }

  function doFunnyAnimation() {
    const rotate = Math.floor(Math.random() * 360);
    const jumpX = (Math.random() - 0.5) * 100;
    const jumpY = (Math.random() - 0.5) * 100;
    const scale = 0.8 + Math.random() * 0.4;

    setTimeout(() => {
      bug.style.transform = `translate(0, 0) rotate(0deg) scale(1)`;
    }, 400);
  }

  bug.addEventListener('click', () => {
    doFunnyAnimation();
    saySomething();
  });
});
//

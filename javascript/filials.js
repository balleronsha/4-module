document.addEventListener('DOMContentLoaded', () => {
  // Меню
  const menuBtn = document.querySelector('.menubtn1');
  const menu = document.getElementById('menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      menu.classList.toggle('show');
    });
  }
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
  document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
      });
    }
  });

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

    // Swipe support
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

  // Показ описания и скрытие основного контента при клике на lecpro
  const lecpro = document.getElementById('lecpro');
  const desc = document.getElementById('lec-desc');
  const mainContent = document.querySelector('.filial-main-content');
  const closeBtn = document.getElementById('close-desc');

  if (lecpro && desc && mainContent && closeBtn) {
    lecpro.addEventListener('click', () => {
      mainContent.classList.add('hidden');
      desc.classList.add('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    closeBtn.addEventListener('click', () => {
      desc.classList.remove('visible');
      mainContent.classList.remove('hidden');
    });
  }
});
//
//
//
//// Показ описания и скрытие основного контента при клике на lecpro
const lecpro = document.getElementById('lecpro');
const desc = document.getElementById('lec-desc');
const mainContent = document.querySelector('.filial-main-content');
const closeBtn = document.getElementById('close-desc');

if (lecpro && desc && mainContent && closeBtn) {
  lecpro.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    desc.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  closeBtn.addEventListener('click', () => {
    desc.classList.remove('visible');
    mainContent.classList.remove('hidden');
  });
}
//
//
//
//
//
//
//
//
document.addEventListener('DOMContentLoaded', () => {
  const images = ['images/razd1.png', 'images/razd2.png', 'images/razd3.png'];
  const imgElement = document.getElementById('autoslide-image');
  let currentIndex = 0;

  setInterval(() => {
    // Начинаем плавное исчезновение
    imgElement.style.transition = 'opacity 1s ease-in-out';
    imgElement.style.opacity = 0;

    setTimeout(() => {
      // Меняем изображение
      currentIndex = (currentIndex + 1) % images.length;
      imgElement.src = images[currentIndex];

      // Плавно показываем
      imgElement.style.opacity = 1;
    }, 1000); // ждем 1 секунду пока исчезнет
  }, 5000); // каждые 5 секунд меняем картинку
});

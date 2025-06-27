// тыкалка для появления меню
document.querySelector('.menubtn1').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('menu').classList.toggle('show');
});
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}
//
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }
});

// СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ
const scene = document.getElementById('scene');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const ease = 1.5; // Чем ближе к 1 — тем быстрее

document.addEventListener('mousemove', (e) => {
  const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
  const normalizedY = (e.clientY / window.innerHeight - 0.5) * -2;

  targetX = normalizedX * 20;
  targetY = normalizedY * 20;
});

function animate() {
  currentX += (targetX - currentX) * ease;
  currentY += (targetY - currentY) * ease;

  scene.style.transform = `rotateY(${currentX}deg) rotateX(${currentY}deg)`;

  requestAnimationFrame(animate);
}

animate();
//
//

document.addEventListener('DOMContentLoaded', () => {
  const triggers = [
    { selector: '.pivo1', modalId: 'modal1' },
    { selector: '.pivo2', modalId: 'modal2' },
    { selector: '.pivo3', modalId: 'modal3' },
    { selector: '.pivo4', modalId: 'modal4' },
    { selector: '.pivo5', modalId: 'modal5' },
    { selector: '.pivo6', modalId: 'modal6' },
    { selector: '.pivo7', modalId: 'modal7' },
  ];

  triggers.forEach(({ selector, modalId }) => {
    const trigger = document.querySelector(selector);
    const modal = document.getElementById(modalId);
    if (trigger && modal) {
      trigger.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
    }
  });

  document.querySelectorAll('.close').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modal);
      if (modal) modal.style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
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
//
//
//
//
//
//
//
//
document.addEventListener('DOMContentLoaded', () => {
  const posters = document.querySelectorAll('.poster');

  posters.forEach((poster) => {
    poster.addEventListener('click', () => {
      const isOpen = poster.classList.contains('poster-open');

      if (!isOpen) {
        closeAllPosters(); // Закрываем другие, если что-то уже открыто

        // Сохраняем старые стили
        const rect = poster.getBoundingClientRect();
        poster.dataset.originalTop = poster.style.top || '';
        poster.dataset.originalLeft = poster.style.left || '';
        poster.dataset.originalTransform = poster.style.transform || '';
        poster.dataset.originalZIndex = poster.style.zIndex || '';

        // Ставим fixed, центрируем
        poster.style.position = 'fixed';
        poster.style.top = '50%';
        poster.style.left = '50%';
        poster.style.transform = 'translate(-50%, -50%) scale(2)';
        poster.style.transition =
          'transform 0.5s ease, top 0.5s ease, left 0.5s ease';
        poster.style.zIndex = '100000';
        poster.classList.add('poster-open');
      } else {
        restorePoster(poster);
      }
    });
  });

  function closeAllPosters() {
    const openPosters = document.querySelectorAll('.poster-open');
    openPosters.forEach((p) => restorePoster(p));
  }

  function restorePoster(poster) {
    poster.style.position = 'absolute';
    poster.style.top = poster.dataset.originalTop;
    poster.style.left = poster.dataset.originalLeft;
    poster.style.transform = poster.dataset.originalTransform;
    poster.style.zIndex = poster.dataset.originalZIndex;
    poster.classList.remove('poster-open');
  }

  // Закрытие при нажатии Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllPosters();
    }
  });
});
//
//
//
//
//
//
//
//
//  загрузочкааа
document.addEventListener('DOMContentLoaded', () => {
  const posters = document.querySelectorAll('.poster');

  posters.forEach((poster) => {
    // Сохраняем оригинальное transform
    poster.dataset.originalTransform = poster.style.transform;

    // Устанавливаем сразу кривое (вихревое) положение
    const angleY = Math.random() * 720 - 360;
    const angleZ = Math.random() * 720 - 360;
    const offsetX = Math.random() * 400 - 200;
    const offsetY = Math.random() * 400 - 200;
    const offsetZ = Math.random() * 800 - 400;
    const scale = 0.5 + Math.random() * 0.5;

    poster.style.transform = `
      rotateY(${angleY}deg)
      rotateZ(${angleZ}deg)
      translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px)
      scale(${scale})
    `;
  });

  // Запускаем плавное возвращение к обычному состоянию
  setTimeout(() => {
    posters.forEach((poster) => {
      poster.style.transition = 'transform 1s ease-in-out';
      poster.style.transform = ''; // вернётся к оригинальному стилю CSS
    });
  }, 100); // маленькая задержка, чтобы браузер применил первое состояние
});
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 800) {
    const teamLinks = document.querySelectorAll('a[href*="team.html"]');
    teamLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Страница "Команда" доступна только на компьютере 🐞');
      });
    });
  }
});

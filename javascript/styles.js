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

//
//

//
//
//
//
//
// анимашка
document.addEventListener('DOMContentLoaded', () => {
  const pairs = [
    ['pila', 'xoxo1'],
    ['love', 'xoxo2'],
    ['kust', 'xoxo3'],
    ['chocopie', 'xoxo4'],
    ['pirat', 'xoxo5'],
    ['sugar', 'xoxo6'],
  ];

  pairs.forEach(([hoverId, targetId]) => {
    const hoverElement = document.getElementById(hoverId);
    const targetElement = document.getElementById(targetId);

    if (hoverElement && targetElement) {
      hoverElement.addEventListener('mouseenter', () => {
        targetElement.classList.add('silly-shake-vw');
      });

      hoverElement.addEventListener('mouseleave', () => {
        targetElement.classList.remove('silly-shake-vw');
      });
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
// текстттт анимаиииия
// Глитчик для текста соооочныыый
document.addEventListener('DOMContentLoaded', () => {
  const chars = ' bugs dance bugs dance bugs dance bugs dance ';
  const interval = 30;
  const glitchElements = document.querySelectorAll(
    '.roza6, .roza5, .roza4, .roza3, .roza2,.roza1'
  );
  glitchElements.forEach((el) => {
    const originalText = el.textContent;
    el.addEventListener('mouseenter', () => {
      let frame = 0;
      const length = originalText.length;
      const randomChar = () => chars[Math.floor(Math.random() * chars.length)];
      const glitchInterval = setInterval(() => {
        let output = '';
        for (let i = 0; i < length; i++) {
          if (i < frame) {
            output += originalText[i];
          } else {
            output += randomChar();
          }
        }
        el.textContent = output;
        frame++;
        if (frame > length) {
          clearInterval(glitchInterval);
          el.textContent = originalText;
        }
      }, interval);
    });
  });
});
//
//
//
//
//
//
//
document.addEventListener('DOMContentLoaded', () => {
  const modals = [
    'skuchno1',
    'skuchno2',
    'skuchno3',
    'skuchno4',
    'skuchno5',
    'skuchno6',
  ];
  const triggers = ['pila', 'love', 'kust', 'chocopie', 'pirat', 'sugar'];
  const images = ['xoxo1', 'xoxo2', 'xoxo3', 'xoxo4', 'xoxo5', 'xoxo6'];

  triggers.forEach((triggerId, index) => {
    const trigger = document.getElementById(triggerId);
    const modalToOpen = document.getElementById(modals[index]);
    const img = document.getElementById(images[index]);
    if (trigger && modalToOpen && img) {
      trigger.addEventListener('click', () => {
        modals.forEach((modalId, i) => {
          const modal = document.getElementById(modalId);
          const image = document.getElementById(images[i]);
          if (modal) modal.style.display = 'none';
          if (image) {
            // Возвращаем исходный src без "pink"
            image.src = image.src.replace(/pink\.svg$/, '.svg');
          }
        });
        modalToOpen.style.display = 'flex';
        img.src = img.src.replace(/\.svg$/, 'pink.svg');
      });
    }
  });

  // Закрытие по клику на крестик с классом flow
  document.querySelectorAll('.flow').forEach((btn) => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('[id^="skuchno"]');
      if (parentModal) {
        parentModal.style.display = 'none';
        const index = modals.indexOf(parentModal.id);
        if (index !== -1) {
          const image = document.getElementById(images[index]);
          if (image) {
            image.src = image.src.replace(/pink\.svg$/, '.svg');
          }
        }
      }
    });
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
//
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

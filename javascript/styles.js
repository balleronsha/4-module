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
//
//
//
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footershop');

  // Сопоставление товаров и карточек
  const pairs = [
    { triggerId: 'meshok', cardId: 'card-meshok' },
    { triggerId: 'yoga', cardId: 'card-yoga' },
    { triggerId: 'fest', cardId: 'card-fest' },
    { triggerId: 'like', cardId: 'card-like' },
    { triggerId: 'noski', cardId: 'card-noski' },
    { triggerId: 'zluka', cardId: 'card-zluka' },
    { triggerId: 'musicaaaa', cardId: 'card-musicaaaa' },
  ];

  pairs.forEach(({ triggerId, cardId }) => {
    const trigger = document.getElementById(triggerId);
    const card = document.getElementById(cardId);

    if (trigger && card) {
      trigger.addEventListener('click', () => {
        card.style.display = 'block';
        document.body.classList.add('no-scroll');
        if (footer) footer.style.display = 'none';
      });
    }
  });
});

//  Функция закрытия карточки
function closeCard(id) {
  const card = document.getElementById(id);
  const footer = document.querySelector('.footershop');

  if (card) {
    card.style.display = 'none';
    document.body.classList.remove('no-scroll');
    if (footer) footer.style.display = 'block';
  }
}

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
// смена изображения

document.addEventListener('DOMContentLoaded', () => {
  const blocks = ['pila', 'love', 'kust', 'chocopie', 'pirat', 'sugar'];
  const xoxoIds = ['xoxo1', 'xoxo2', 'xoxo3', 'xoxo4', 'xoxo5', 'xoxo6'];
  const skuchnoIds = [
    'skuchno1',
    'skuchno2',
    'skuchno3',
    'skuchno4',
    'skuchno5',
    'skuchno6',
  ];

  blocks.forEach((blockId, index) => {
    const block = document.getElementById(blockId);
    const xoxoImg = document.getElementById(xoxoIds[index]);
    const skuchno = document.getElementById(skuchnoIds[index]);

    if (!block || !xoxoImg || !skuchno) return;

    // Клик по блоку
    block.addEventListener('click', () => {
      skuchno.style.display = 'block';

      const src = xoxoImg.getAttribute('src');

      // Получаем имя файла без расширения и пути
      const filename = src.split('/').pop().replace('.svg', '');

      // Добавляем Pink, если ещё не pink
      if (!filename.toLowerCase().includes('pink')) {
        const pinkSrc = `images/${filename}pink.svg`;
        xoxoImg.setAttribute('src', pinkSrc);
      }
    });

    // Закрытие окна
    const closeBtn = skuchno.querySelector('.flow');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        skuchno.style.display = 'none';

        const pinkSrc = xoxoImg.getAttribute('src');
        const originalSrc = pinkSrc.replace('pink.svg', '.svg');
        xoxoImg.setAttribute('src', originalSrc);
      });
    }
  });
});
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
        // Закрываем все окна и возвращаем изображения в исходное состояние
        modals.forEach((modalId, i) => {
          const modal = document.getElementById(modalId);
          const image = document.getElementById(images[i]);
          if (modal) modal.style.display = 'none';
          if (image) {
            // Возвращаем исходный src без "pink"
            image.src = image.src.replace(/pink\.svg$/, '.svg');
          }
        });

        // Открываем нужное окно и меняем картинку на pink-версию
        modalToOpen.style.display = 'flex';
        // Меняем src на pink-версию (например, pilates.svg -> pilatespink.svg)
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
        // Найдём индекс закрываемого модала
        const index = modals.indexOf(parentModal.id);
        if (index !== -1) {
          const image = document.getElementById(images[index]);
          if (image) {
            // Возвращаем исходный src без pink
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

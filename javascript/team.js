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
//
//
//
//
//
//
//
//
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod1');
  const tvar = document.getElementById('tvar1');

  if (!prepod || !tvar) return;

  const style = window.getComputedStyle(tvar);
  const initialTopPx = parseFloat(style.top);
  const initialLeftPx = parseFloat(style.left);

  const vw = window.innerWidth / 100;
  const deltaTop = -60 * vw; // вверх на 40vw (редактируй здесь)
  const deltaLeft = 40 * vw; // вправо на 40vw (редактируй здесь)
  const duration = 2000;

  let animationTimeout = null;

  function startRun() {
    tvar.classList.add('shake');
    tvar.style.transition = `top ${duration}ms linear, left ${duration}ms linear`;
    tvar.style.top = initialTopPx + deltaTop + 'px';
    tvar.style.left = initialLeftPx + deltaLeft + 'px';

    animationTimeout = setTimeout(() => {
      tvar.classList.remove('shake');
      tvar.style.transition = 'none';
      tvar.style.top = initialTopPx + 'px';
      tvar.style.left = initialLeftPx + 'px';

      setTimeout(() => {
        if (animationTimeout !== null) startRun();
      }, 50);
    }, duration);
  }

  function stopRun() {
    clearTimeout(animationTimeout);
    animationTimeout = null;
    tvar.classList.remove('shake');
    tvar.style.transition = 'top 0.3s ease, left 0.3s ease';
    tvar.style.top = initialTopPx + 'px';
    tvar.style.left = initialLeftPx + 'px';
  }

  prepod.addEventListener('mouseenter', () => {
    if (animationTimeout === null) startRun();
  });

  prepod.addEventListener('mouseleave', () => {
    stopRun();
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
//
//
//
//
//
//
//
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod2');
  const tvar = document.getElementById('tvar2');

  if (!prepod || !tvar) return;

  const style = window.getComputedStyle(tvar);
  const initialTopPx = parseFloat(style.top);
  const initialLeftPx = parseFloat(style.left);

  const vw = window.innerWidth / 100;
  const deltaTop = -10 * vw; // редактируй по желанию
  const deltaLeft = -50 * vw; // движение влево
  const duration = 2000;

  let animationTimeout = null;

  function startRun() {
    tvar.classList.add('shake');
    tvar.style.transition = `top ${duration}ms linear, left ${duration}ms linear`;
    tvar.style.top = initialTopPx + deltaTop + 'px';
    tvar.style.left = initialLeftPx + deltaLeft + 'px';

    animationTimeout = setTimeout(() => {
      tvar.classList.remove('shake');
      tvar.style.transition = 'none';
      tvar.style.top = initialTopPx + 'px';
      tvar.style.left = initialLeftPx + 'px';

      setTimeout(() => {
        if (animationTimeout !== null) startRun();
      }, 50);
    }, duration);
  }

  function stopRun() {
    clearTimeout(animationTimeout);
    animationTimeout = null;
    tvar.classList.remove('shake');
    tvar.style.transition = 'top 0.3s ease, left 0.3s ease';
    tvar.style.top = initialTopPx + 'px';
    tvar.style.left = initialLeftPx + 'px';
  }

  prepod.addEventListener('mouseenter', () => {
    if (animationTimeout === null) startRun();
  });

  prepod.addEventListener('mouseleave', () => {
    stopRun();
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
  const prepod = document.querySelector('.prepod3');
  const tvar = document.getElementById('tvar3');

  if (!prepod || !tvar) return;

  const style = window.getComputedStyle(tvar);
  const initialTopPx = parseFloat(style.top);
  const initialLeftPx = parseFloat(style.left);

  const vw = window.innerWidth / 100;
  const deltaTop = -50 * vw; // вверх
  const deltaLeft = -35 * vw; // влево
  const duration = 2000;

  let animationTimeout = null;

  function startRun() {
    tvar.classList.add('shake');
    tvar.style.transition = `top ${duration}ms linear, left ${duration}ms linear`;
    tvar.style.top = initialTopPx + deltaTop + 'px';
    tvar.style.left = initialLeftPx + deltaLeft + 'px';

    animationTimeout = setTimeout(() => {
      tvar.classList.remove('shake');
      tvar.style.transition = 'none';
      tvar.style.top = initialTopPx + 'px';
      tvar.style.left = initialLeftPx + 'px';

      setTimeout(() => {
        if (animationTimeout !== null) startRun();
      }, 50);
    }, duration);
  }

  function stopRun() {
    clearTimeout(animationTimeout);
    animationTimeout = null;
    tvar.classList.remove('shake');
    tvar.style.transition = 'top 0.3s ease, left 0.3s ease';
    tvar.style.top = initialTopPx + 'px';
    tvar.style.left = initialLeftPx + 'px';
  }

  prepod.addEventListener('mouseenter', () => {
    if (animationTimeout === null) startRun();
  });

  prepod.addEventListener('mouseleave', () => {
    stopRun();
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
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod4');
  const tvar = document.getElementById('tvar4');

  if (!prepod || !tvar) return;

  const style = window.getComputedStyle(tvar);
  const initialTopPx = parseFloat(style.top);
  const initialLeftPx = parseFloat(style.left);

  const vw = window.innerWidth / 100;
  const deltaTop = 10 * vw; // вниз
  const deltaLeft = 50 * vw; // вправо
  const duration = 2000;

  let animationTimeout = null;

  function startRun() {
    tvar.classList.add('shake');
    tvar.style.transition = `top ${duration}ms linear, left ${duration}ms linear`;
    tvar.style.top = initialTopPx + deltaTop + 'px';
    tvar.style.left = initialLeftPx + deltaLeft + 'px';

    animationTimeout = setTimeout(() => {
      tvar.classList.remove('shake');
      tvar.style.transition = 'none';
      tvar.style.top = initialTopPx + 'px';
      tvar.style.left = initialLeftPx + 'px';

      setTimeout(() => {
        if (animationTimeout !== null) startRun();
      }, 50);
    }, duration);
  }

  function stopRun() {
    clearTimeout(animationTimeout);
    animationTimeout = null;
    tvar.classList.remove('shake');
    tvar.style.transition = 'top 0.3s ease, left 0.3s ease';
    tvar.style.top = initialTopPx + 'px';
    tvar.style.left = initialLeftPx + 'px';
  }

  prepod.addEventListener('mouseenter', () => {
    if (animationTimeout === null) startRun();
  });

  prepod.addEventListener('mouseleave', () => {
    stopRun();
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
//
//
//
//
//

document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod5');
  const tvar = document.getElementById('tvar5');

  if (!prepod || !tvar) return;

  const style = window.getComputedStyle(tvar);
  const initialTopPx = parseFloat(style.top);
  const initialLeftPx = parseFloat(style.left);

  const vw = window.innerWidth / 100;
  const deltaTop = -50 * vw; // вверх
  const duration = 2000;

  let animationTimeout = null;

  function startRun() {
    tvar.classList.add('shake');
    tvar.style.transition = `top ${duration}ms linear`;
    tvar.style.top = initialTopPx + deltaTop + 'px';

    animationTimeout = setTimeout(() => {
      tvar.classList.remove('shake');
      tvar.style.transition = 'none';
      tvar.style.top = initialTopPx + 'px';

      setTimeout(() => {
        if (animationTimeout !== null) startRun();
      }, 50);
    }, duration);
  }

  function stopRun() {
    clearTimeout(animationTimeout);
    animationTimeout = null;
    tvar.classList.remove('shake');
    tvar.style.transition = 'top 0.3s ease';
    tvar.style.top = initialTopPx + 'px';
  }

  prepod.addEventListener('mouseenter', () => {
    if (animationTimeout === null) startRun();
  });

  prepod.addEventListener('mouseleave', () => {
    stopRun();
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
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod6');
  const tvar = document.getElementById('tvar6');

  if (!prepod || !tvar) return;

  const style = window.getComputedStyle(tvar);
  const initialTopPx = parseFloat(style.top);
  const initialLeftPx = parseFloat(style.left);

  const vw = window.innerWidth / 100;
  const deltaTop = 20 * vw; // вниз
  const deltaLeft = -50 * vw; // немного влево
  const duration = 2000;

  let animationTimeout = null;

  function startRun() {
    tvar.classList.add('shake');
    tvar.style.transition = `top ${duration}ms linear, left ${duration}ms linear`;
    tvar.style.top = initialTopPx + deltaTop + 'px';
    tvar.style.left = initialLeftPx + deltaLeft + 'px';

    animationTimeout = setTimeout(() => {
      tvar.classList.remove('shake');
      tvar.style.transition = 'none';
      tvar.style.top = initialTopPx + 'px';
      tvar.style.left = initialLeftPx + 'px';

      setTimeout(() => {
        if (animationTimeout !== null) startRun();
      }, 50);
    }, duration);
  }

  function stopRun() {
    clearTimeout(animationTimeout);
    animationTimeout = null;
    tvar.classList.remove('shake');
    tvar.style.transition = 'top 0.3s ease, left 0.3s ease';
    tvar.style.top = initialTopPx + 'px';
    tvar.style.left = initialLeftPx + 'px';
  }

  prepod.addEventListener('mouseenter', () => {
    if (animationTimeout === null) startRun();
  });

  prepod.addEventListener('mouseleave', () => {
    stopRun();
  });
});

//
// ЭТО ЕСЛИ ЧТО ФЛИИИИИП КАРТОЧКИ 1
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod1');
  if (!prepod) return;

  prepod.addEventListener('click', () => {
    prepod.classList.toggle('flipped');
  });
});
// ЭТО ЕСЛИ ЧТО ФЛИИИИИП КАРТОЧКИ 2
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod2');
  if (!prepod) return;

  prepod.addEventListener('click', () => {
    prepod.classList.toggle('flipped');
  });
});
// ЭТО ЕСЛИ ЧТО ФЛИИИИИП КАРТОЧКИ 3
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod3');
  if (!prepod) return;

  prepod.addEventListener('click', () => {
    prepod.classList.toggle('flipped');
  });
});
// ЭТО ЕСЛИ ЧТО ФЛИИИИИП КАРТОЧКИ 4
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod4');
  if (!prepod) return;

  prepod.addEventListener('click', () => {
    prepod.classList.toggle('flipped');
  });
});
// ЭТО ЕСЛИ ЧТО ФЛИИИИИП КАРТОЧКИ 5
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod5');
  if (!prepod) return;

  prepod.addEventListener('click', () => {
    prepod.classList.toggle('flipped');
  });
});
// ЭТО ЕСЛИ ЧТО ФЛИИИИИП КАРТОЧКИ 6
document.addEventListener('DOMContentLoaded', () => {
  const prepod = document.querySelector('.prepod6');
  if (!prepod) return;

  prepod.addEventListener('click', () => {
    prepod.classList.toggle('flipped');
  });
});

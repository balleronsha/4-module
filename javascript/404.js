// бешеные неадекватные тараканы — интерактивная версия
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.bugs-container');

  if (!container) {
    console.error('Контейнер .bugs-container не найден!');
    return;
  }

  for (let i = 0; i < 90; i++) {
    const bug = document.createElement('div');
    bug.classList.add('bug');

    bug.style.position = 'absolute';
    bug.style.top = Math.random() * 100 + '%';
    bug.style.left = Math.random() * 100 + '%';

    // Быстрая анимация
    const duration = 3 + Math.random() * 2; // 3–5 секунд
    bug.style.animationDuration = `${duration}s`;
    bug.style.animationDelay = `${Math.random() * 3}s`;
    bug.style.animationTimingFunction = 'linear';
    bug.style.animationIterationCount = 'infinite';

    const animationName = `moveBug${i}`;
    bug.style.animationName = animationName;

    const keyframes = `
      @keyframes ${animationName} {
        0%   { transform: translate(0, 0) rotate(0deg); }
        25%  { transform: translate(${Math.random() * 80 - 40}vw, ${
      Math.random() * 80 - 40
    }vh) rotate(90deg); }
        50%  { transform: translate(${Math.random() * 80 - 40}vw, ${
      Math.random() * 80 - 40
    }vh) rotate(180deg); }
        75%  { transform: translate(${Math.random() * 80 - 40}vw, ${
      Math.random() * 80 - 40
    }vh) rotate(270deg); }
        100% { transform: translate(0, 0) rotate(360deg); }
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);

    // давай играть в прятки
    bug.addEventListener('click', () => {
      bug.remove();
    });

    container.appendChild(bug);
  }
});

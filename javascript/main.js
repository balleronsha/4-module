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
//
//
//

// бешеные неадекватные тараканы
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.bugs-container');

  if (!container) {
    console.error('Контейнер .bugs-container не найден!');
    return;
  }

  for (let i = 0; i < 40; i++) {
    const bug = document.createElement('div');
    bug.classList.add('bug');

    bug.style.position = 'absolute';
    bug.style.top = Math.random() * 100 + '%';
    bug.style.left = Math.random() * 100 + '%';

    const duration = 7 + Math.random();
    bug.style.animationDuration = `${duration}s`;

    bug.style.animationDelay = `${Math.random() * 8}s`;

    const animationName = `moveBug${i}`;
    bug.style.animationName = animationName;
    bug.style.animationTimingFunction = 'linear';
    bug.style.animationIterationCount = 'infinite';

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

    container.appendChild(bug);
  }
});
//
//
// МОЯ КЛАВААААААА
document.addEventListener('DOMContentLoaded', () => {
  const asciiArt = document.querySelector('.ascii-art');
  const spans = asciiArt.querySelectorAll('span');

  const cursor = document.createElement('div');
  cursor.classList.add('ascii-art-cursor');
  asciiArt.appendChild(cursor);

  asciiArt.addEventListener('mousemove', (e) => {
    const rect = asciiArt.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    spans.forEach((span) => {
      const spanRect = span.getBoundingClientRect();
      const spanX = spanRect.left + spanRect.width / 2;
      const spanY = spanRect.top + spanRect.height / 2;

      const dx = e.clientX - spanX;
      const dy = e.clientY - spanY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 30) {
        span.classList.add('active');
      }
    });
  });
});

// ЭТО КАК НАЗЫВАЕТСЯ ТАРАРКАНЫ( ИСТОЧНИК: https://ru.stackoverflow.com/questions/1518882/как-сделать-анимацию-движения-таракана)
const container = document.getElementById('minibug');
const makeCockroach = (icon) => {
  const vspeed = 100;
  const aspeed = 2 * Math.PI;
  let lastT = 0;
  let lastTargetTime = -100;
  let a = 0;
  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;

  const update = (t) => {
    if (t >= lastTargetTime + 1.5 + Math.random()) {
      const rect = container.getBoundingClientRect();
      tx = Math.random() * rect.width;
      ty = Math.random() * rect.height;
      lastTargetTime = t;
    }

    const dt = t - lastT;

    const ta = Math.atan2(ty - y, tx - x);
    for (; a < ta; a += 2 * Math.PI) {}
    for (; a > ta; a -= 2 * Math.PI) {}
    const a2 = a + 2 * Math.PI;
    if (ta - a < a2 - ta) {
      a = Math.min(ta, a + dt * aspeed);
    } else {
      a = Math.max(ta, a2 - dt * aspeed);
    }

    x += dt * vspeed * Math.cos(a);
    y += dt * vspeed * Math.sin(a);
    icon.style.left = x + 'px';
    icon.style.top = y + 'px';
    icon.style.transform = 'rotate(' + ((180 * a) / Math.PI - 135) + 'deg)';
    lastT = t;
  };

  return { update: update };
};

const cockroaches = Array.prototype.map.call(
  document.getElementsByClassName('dur'),
  makeCockroach
);

const step = () => {
  const t = performance.now() / 1000;
  for (const cockroach of cockroaches) {
    cockroach.update(t);
  }
  window.requestAnimationFrame(step);
};
window.requestAnimationFrame(step);

// Меню-бургер (если используется)
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}
const card = document.querySelector('.card');
const layers = [
  document.querySelector('.concert2222'),
  document.querySelector('.concert222'),
  document.querySelector('.concert22'),
];
//
//
//
//
//
//

// Глитчик для текста соооочныыый
document.addEventListener('DOMContentLoaded', () => {
  const chars = ' bugs dance bugs dance ';
  const glitchDuration = 500;
  const interval = 30;

  const glitchElements = document.querySelectorAll(
    '.plus1, .plus2, .plus3, .plus4, .stoimost1, .stoimost2, .stoimost3, .stoimost4, .sumkawhat, .sumkaprice, .koverwhat, .koverprice,.brasletwhat, .brasletprice, .tshirtwhat, .tshirtprice, .sockswhat, .socksprice, .znachwhat, .znachprice, .plastinkawhat , .plastinkaprice'
  );

  glitchElements.forEach((el) => {
    const originalText = el.dataset.text || el.textContent;

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
//
//
//
//
//
//
// ПАРАЛЛЛЛЛЛЛЛЛЛАКС если что можно отключить
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const selectors = ['.zagl1', '.zagl2', '.zagl3', '.txt1', '.txt2', '.txt3'];

  selectors.forEach((selector, index) => {
    const el = document.querySelector(selector);
    if (el) {
      const translateX = Math.sin(scrollY * 0.02 + index) * 12;
      const rotateY = Math.cos(scrollY * 0.015 + index) * 15; // поворот по оси Y ±15deg

      el.style.transform = `translateX(${translateX}px) rotateY(${rotateY}deg)`;
      el.style.transformStyle = 'preserve-3d'; // чтобы 3D-эффект работал
      el.style.perspective = '500px';
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
//
//
//
//
//
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.tsennikiiiii');

  const bug = document.createElement('div');
  bug.classList.add('fast-bug');
  container.appendChild(bug);

  const duration = 1500;

  const amplitude = 40;
  const frequency = 2 * Math.PI * 2;
  function getX(t, startX, endX) {
    return startX + (endX - startX) * t;
  }
  function getY(t, height) {
    return height / 2 + amplitude * Math.sin(frequency * t);
  }
  function getDYDT(t) {
    return amplitude * frequency * Math.cos(frequency * t);
  }
  function animateBug(timestampStart) {
    const startX = -bug.offsetWidth || -100;
    const endX = container.offsetWidth + (bug.offsetWidth || 100);
    function step(timestamp) {
      if (!timestampStart) timestampStart = timestamp;
      const elapsed = timestamp - timestampStart;
      const t = Math.min(elapsed / duration, 1);
      const x = getX(t, startX, endX);
      const y = getY(t, container.offsetHeight);
      const dxdt = endX - startX;
      const dydt = getDYDT(t) * duration;
      const angleRad = Math.atan2(dydt, dxdt);
      const angleDeg = angleRad * (180 / Math.PI);

      bug.style.transform = `translate(${x}px, ${y}px) rotate(${angleDeg}deg)`;
      bug.style.opacity = '1';

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        bug.style.opacity = '0';
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBug();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(container);
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
  const tsenniki = document.querySelector('.tsennikiiiii');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tsenniki.classList.add('visible');
          observer.unobserve(tsenniki);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(tsenniki);
});

//
//
//
//
//
//
//
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.forma');
  const button = document.getElementById('submit-button');
  const inputs = form.querySelectorAll('.input-field');
  const checkbox = form.querySelector('input[name="consent"]');
  const overlay = document.getElementById('successOverlay');
  const closeBtn = document.getElementById('closeSuccess');

  function validateForm() {
    const allFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ''
    );
    button.disabled = !(allFilled && checkbox.checked);
  }

  inputs.forEach((input) => input.addEventListener('input', validateForm));
  checkbox.addEventListener('change', validateForm);

  button.addEventListener('click', function (e) {
    e.preventDefault();
    if (!button.disabled) {
      overlay.classList.add('visible');
    }
  });

  closeBtn.addEventListener('click', function () {
    overlay.classList.remove('visible');
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
// СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ СОБЫТИЯ
const scene = document.getElementById('scene');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const ease = 1; // Чем ближе к 1 — тем быстрее

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

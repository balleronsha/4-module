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
//
//
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footershop');
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
//
// Глитчик для текста соооочныыый
document.addEventListener('DOMContentLoaded', () => {
  const chars = ' bugs dance bugs dance ';
  const interval = 30;
  const glitchElements = document.querySelectorAll(
    '.plus1, .plus2, .plus3, .plus4, .stoimost1, .stoimost2, .stoimost3, .stoimost4, .sumkawhat, .sumkaprice, .koverwhat, .koverprice, .brasletwhat, .brasletprice, .tshirtwhat, .tshirtprice, .sockswhat, .socksprice, .znachwhat, .znachprice, .plastinkawhat, .plastinkaprice, .back-btn, .hrupko1'
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
// ШЕВЕЛИТСЯ МОНСТП
document.addEventListener('DOMContentLoaded', () => {
  const cardIds = [
    '#sumka-card',
    '#kover-card',
    '#braslet-card',
    '#tshirt-card',
    '#noski-card',
    '#z-card',
    '#plastinka-card',
  ];

  cardIds.forEach((id) => {
    const el = document.querySelector(id);
    if (el) {
      el.classList.add('shake');
    }
  });
});

//
//
//
//
//
//
// МЕНЯЛКА ИЗОБРАЖЕНИЯ С СУМОЧКОЙ
document.addEventListener('DOMContentLoaded', () => {
  const sumkaImage = document.getElementById('sumka-card');
  const bubikRoz = document.querySelector('.bubikroz1');
  const bubikZel = document.querySelector('.bubikzel1');

  if (sumkaImage && bubikRoz && bubikZel) {
    bubikRoz.addEventListener('click', () => {
      sumkaImage.src = 'images/sumka-pink.png';
      bubikRoz.style.border = '0.2vw solid #000';
      bubikZel.style.border = 'none';
    });
    bubikZel.addEventListener('click', () => {
      sumkaImage.src = 'images/sumka.png';
      bubikZel.style.border = '0.2vw solid #000';
      bubikRoz.style.border = 'none';
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
//
//
//
// МЕНЯЛКА С ЙОГАМИ
document.addEventListener('DOMContentLoaded', () => {
  const koverImage = document.getElementById('kover-card');
  const bubikRoz = document.querySelector('.bubikroz2');
  const bubikZel = document.querySelector('.bubikzel2');
  const bubikBel = document.querySelector('.bubikbel2');

  if (koverImage && bubikRoz && bubikZel && bubikBel) {
    function clearBorders() {
      bubikRoz.style.border = 'none';
      bubikZel.style.border = 'none';
      bubikBel.style.border = 'none';
    }

    bubikRoz.addEventListener('click', () => {
      koverImage.src = 'images/kover-pink.png';
      clearBorders();
      bubikRoz.style.border = '0.2vw solid #000';
    });

    bubikZel.addEventListener('click', () => {
      koverImage.src = 'images/kover.png';
      clearBorders();
      bubikZel.style.border = '0.2vw solid #000';
    });

    bubikBel.addEventListener('click', () => {
      koverImage.src = 'images/kover-white.png';
      clearBorders();
      bubikBel.style.border = '0.2vw solid #000';
    });
    bubikZel.click();
  }
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

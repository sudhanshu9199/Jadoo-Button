let box = document.querySelector('.box');
let area = document.querySelector('.area');
let countDisplay = document.querySelector('.counter-display span');
let message = document.querySelector('.message');
let failCount = 0;

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

area.addEventListener('mousemove', (e) => {
    const randomX = Math.random() * (area.clientWidth - box.clientWidth);
    const randomY = Math.random() * (area.clientHeight - box.clientHeight);

    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;

    failCount++;
    countDisplay.textContent = failCount;
});


// ✅ Desktop
if (!isTouchDevice) {
  area.addEventListener('mousemove', box);
}

// ✅ Mobile
if (isTouchDevice) {
  area.addEventListener('touchstart', box);
}


setTimeout(() => {
  message.style.display = 'block'
}, 21000);


area.addEventListener('touchstart', (e) => {
  const randomX = Math.random() * (area.clientWidth - box.clientWidth);
  const randomY = Math.random() * (area.clientHeight - box.clientHeight);

  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;

  failCount++;
  countDisplay.textContent = failCount;
});
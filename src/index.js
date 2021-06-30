const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// ===============
const refs = {
  panelNode: document.querySelector('#panel'),
  bodyNode: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
};

refs.panelNode.addEventListener('click', onClick);
let intervalId = null;

function onClick(e) {
  if (e.target.dataset.action === 'start') {
    e.target.disabled = true;
    intervalId = setInterval(() => {
      const bgColor = randomIntegerFromInterval(0, colors.length);
      refs.bodyNode.style.background = colors[bgColor];
    }, 1000);
  }
  if (e.target.dataset.action === 'stop') {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
  }
}

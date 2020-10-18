import refs from './refs';
import colors from './colors';

export default {
  onStartClick,
  onStopClick,
};

let intervalId = null;
let intervalStatus = false;

function onStartClick() {
  intervalStatus = true;
  startButStatus();

  intervalId = setInterval(() => {
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    bodyColorChange(color);
  }, 1000);
}

function onStopClick() {
  intervalStatus = false;
  startButStatus();
  clearInterval(intervalId);
}

function bodyColorChange(newColor) {
  refs.body.style.backgroundColor = newColor;
}

function startButStatus() {
  refs.start.disabled = intervalStatus ? true : false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
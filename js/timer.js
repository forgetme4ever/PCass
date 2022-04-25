const timer =() => {
  const hoursBlock = document.querySelector(".timer__hours");
const minutesBlock = document.querySelector(".timer__minutes");
const secondsBlock = document.querySelector(".timer__seconds");
const daysBlock = document.querySelector(".timer__days");


let interval;

// const numWord = (value, words) => {
//     value = Math.abs(value) % 100
//     value === 1 ? words[0] : words[1]

// }

const updateTimer = () => {
  const date = new Date();

  const dateDeadline = new Date("25 may 2022").getTime(); //timer count down
  const timeRemaining = (dateDeadline - date) / 1000;

  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);
  const days = Math.floor(timeRemaining / 60 / 60 / 24);

  const fHours = hours < 10 ? "0" + hours : hours;
  const fMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fSeconds = seconds < 10 ? "0" + seconds : seconds;
  const fDays = days < 10 ? "0" + days : days;

  hoursBlock.textContent = fHours;
  minutesBlock.textContent = fMinutes;
  secondsBlock.textContent = fSeconds;
  daysBlock.textContent = fDays;

  // secondsBlock.nextElementSibling.textContent = numWord(seconds,['second', 'seconds'])

  if (timeRemaining <= 0) {
    clearInterval(interval);
    hoursBlock.textContent = "00";
    minutesBlock.textContent = "00";
    secondsBlock.textContent = "00";
    daysBlock.textContent = "00";
  }
};

updateTimer();
interval = setInterval(updateTimer, 500);

//spelling time


// ['seconds', 'second']
}

timer()
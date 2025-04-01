const showtime = document.querySelector("#showtime");
const start = document.querySelector("#startBtn");
const stop = document.querySelector("#stopBtn");
const reset = document.querySelector("#resetBtn");
const realtime = document.querySelector("#realtime");
setInterval(() => {
  const time = new Date();
  realtime.innerHTML = `<h1>Real-Time</h1> <br> ${time} `;
}, 10);

let msec = 0;
let sec = 0;
let min = 0;

let status = "stop";
let intervalid;

start.addEventListener("click", () => {
  if (status === "stop") {
    status = "start";
    // start.disabled = true; // Disable the start button to prevent multiple intervals
    intervalid = setInterval(() => {
      startTime(); // Corrected function name
    }, 10);
  }
});

reset.addEventListener("click", () => {
  status = "stop";
  msec = 0;
  sec = 0;
  min = 0;
  showtime.innerHTML = "00:00:00";
  clearInterval(intervalid);
  start.disabled = false; // Re-enable the start button
});

stop.addEventListener("click", () => {
  status = "stop";
  clearInterval(intervalid);
  start.disabled = false; // Re-enable the start button
});

function startTime() {
  msec++;
  if (msec === 100) {
    sec++;
    msec = 0;
  }
  if (sec === 60) {
    min++;
    sec = 0;
  }
  if (min === 60) {
    min = 0;
    clearInterval(intervalid);
  }
  console.log(min, sec, msec);
  displayTime();
}

function displayTime() {
  const formattedMin = min < 10 ? `0${min}` : min;
  const formattedSec = sec < 10 ? `0${sec}` : sec;
  const formattedMsec = msec < 10 ? `0${msec}` : msec;
  showtime.innerHTML = `${formattedMin}:${formattedSec}:${formattedMsec}`;
}

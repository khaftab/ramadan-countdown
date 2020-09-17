const ramadan = "12 April 2021";
const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const countdown = () => {
  const ramadanDate = new Date(ramadan);
  const currentDate = new Date();
  const totalSeconds = (ramadanDate - currentDate) / 1000;
  const day = Math.floor(totalSeconds / (3600 * 24));
  const hour = Math.floor(totalSeconds / 3600) % 24;
  const minute = Math.floor(totalSeconds / 60) % 60;
  const second = Math.floor(totalSeconds) % 60;
  //   console.log(day, hour, minute, second);
  dayEl.innerHTML = String(day).length <= 1 ? `0${day}` : day;
  hourEl.innerHTML = String(hour).length <= 1 ? `0${hour}` : hour;
  minuteEl.innerHTML = String(minute).length <= 1 ? `0${minute}` : minute;
  secondEl.innerHTML = String(second).length <= 1 ? `0${second}` : second;
};

setInterval(countdown, 1000);

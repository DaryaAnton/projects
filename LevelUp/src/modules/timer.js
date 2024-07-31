const timer = () => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  const deadline = new Date(new Date().getTime() + 30 * 60 * 1000);
  let idIntervalUpdateClock;
  
  const getTimeRemaining = () => {

    const dateStop = deadline.getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const hours = Math.floor(timeRemaining / 60 / 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds, }
  };

  const zero = (elem) => {
    if (String(elem).length === 1) {
      return '0' + elem;
    } else {
      return String(elem);
    };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    timerHours.textContent = zero(getTime.hours);
    timerMinutes.textContent = zero(getTime.minutes);
    timerSeconds.textContent = zero(getTime.seconds);

    if (getTime.timeRemaining < 0) {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      clearInterval(idIntervalUpdateClock);
    };
  };
  updateClock()
  idIntervalUpdateClock = setInterval(updateClock, 1000);
}

export default timer;
import CountDown from './js/countDown';

function showRemaining(remaining) {
  const onDate = 'Happy Thanksgiving!';
  const previousDay = '01 Day Until Thanksgiving';
  const afterDate = 'We hope you had a happy Thanksgiving 2018';
  if (remaining === 0) {
    return onDate;
  } else if (remaining === 1) {
    return previousDay;
  } else if (remaining >= 1 && remaining <= 9) {
    return `0${remaining} Days Until Thanksgiving`;
  } else if (remaining >= 10) {
    return `${remaining} Days Until Thanksgiving`;
  }
  return afterDate;
}

function initializeClock(daysRemaining) {
  const message = showRemaining(daysRemaining);
  if (document.getElementById('message')) {
    const messageSpan = document.getElementById('message');
    messageSpan.innerHTML = message;
  }
}

const daysRemaining = CountDown.getCountDown('11/22/2018', true).days;

initializeClock(daysRemaining);
export default { showRemaining, initializeClock };

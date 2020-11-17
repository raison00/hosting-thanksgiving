function getCountDown(endDate, d, h, m, s) {
  const retObj = {};
  if (endDate) {
    const t = Date.parse(endDate) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (d && !h && !m && !s) {
      retObj.days = days + 1;
    } else {
      retObj.days = days;
    }
    if (h && !m && !s) {
      retObj.hours = hours + 1;
    } else if (h && m) {
      retObj.hours = hours;
    }
    if (m && !s) {
      retObj.minutes = minutes + 1;
    } else if (m && s) {
      retObj.minutes = minutes;
    }
    if (s) {
      retObj.seconds = seconds;
    }
  }
  return retObj;
}
export default { getCountDown };

import CountDown from '../src/js/countDown';

describe('Count down Utility', () => {
  it('should return return empty object if end date is not passed', () => {
    expect(CountDown.getCountDown()).toEqual({});
  });
  it('should return number of days remaining', () => {
    const today = new Date();
    const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    expect(CountDown.getCountDown(nextDay, true)).toEqual({ days: 1 });
  });
  it('should return number of days and time remaining', () => {
    const today = new Date();
    const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);
    expect(CountDown.getCountDown(nextDay, true, true)).toEqual({ days: 0, hours: (24 - today.getHours()) });
  });
  it('should return number of days,time and minutes remaining', () => {
    const today = new Date();
    const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);
    const result = CountDown.getCountDown(nextDay, true, true, true);
    expect(result).toEqual({ days: 0, hours: (24 - today.getHours() - 1), minutes: (60 - today.getMinutes()) });
  });
  it('should return number of days,time,minutes and seconds remaining', () => {
    const today = new Date();
    const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);
    expect(CountDown.getCountDown(nextDay, true, true, true, true)).toEqual({
      days: 0,
      hours: (24 - today.getHours() - 1),
      minutes: (60 - today.getMinutes() - 1),
      seconds: (60 - today.getSeconds()),
    });
  });
});

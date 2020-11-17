import DefaultClass from '../src/hosting-thanksgiving';

describe('hosting-thanksgiving', () => {
  beforeEach(() => {
    loadFixtures('main.html'); // fixtures/html/main.html becomes your DOM
  });
  it('should return day of message', () => {
    expect(DefaultClass.showRemaining(0)).toEqual('Happy Thanksgiving!');
  });
  it('should return 1 day before message', () => {
    expect(DefaultClass.showRemaining(1)).toEqual('01 Day Until Thanksgiving');
  });
  it('should return 2 days before message', () => {
    expect(DefaultClass.showRemaining(2)).toEqual('02 Days Until Thanksgiving');
  });
  it('should return 10 days before message', () => {
    expect(DefaultClass.showRemaining(10)).toEqual('10 Days Until Thanksgiving');
  });
  it('should return day after message', () => {
    expect(DefaultClass.showRemaining(-1)).toEqual('We hope you had a happy Thanksgiving 2018');
  });
  it('should return day of message inside div with ID message', () => {
    DefaultClass.initializeClock(0);
    expect(document.getElementById('message').innerHTML).toContain('Happy Thanksgiving!');
  });
});

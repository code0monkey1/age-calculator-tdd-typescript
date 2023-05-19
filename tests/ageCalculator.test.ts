import { ageCalculator } from "../src/ageCalculator";

// 4 solution boundries : 
// 1.already had b'day 
// 2.b'day yet to come
// 3.b'day on leap year 
// 4.b'day on the same day as fromDate
describe('ageCalculator', () => { 

  describe('already had birthday this year', () => {
  const testCases = [
    { current: new Date(), prev: new Date('1985-03-04'),expected:38 },
    { current: new Date(), prev: new Date('1989-02-16'),expected:34 },
    { current: new Date(), prev: new Date('1958-03-31'),expected:65 },
  ];

  test.each(testCases)(
    'should calculate difference between $current - $prev to be $expected',
    ({ current, prev,expected }) => {
      // your test code here
     //Assemble
       const sut=ageCalculator()
      //Act 
       const acutual =sut.calculateDifference(current,prev)
       
      //Assert
       expect(acutual).toBe(expected)
    }
  );
});

  describe('b`day should be a leap year', () => {
    const testCases = [
      { current:new Date() , prev: new Date('1980-02-29'), expected: 10 },
      { current:new Date() , prev: new Date('1976-02-29'), expected: 11 },
      { current:new Date() , prev: new Date('1972-02-29'), expected: 12 },
    ];

    test.each(testCases)(
      'should calculate age difference between $current and $prev to be $expected',
      ({ current, prev, expected }) => {

        // Assemble
        const sut = ageCalculator();

        // Act
        const actual = sut.calculateDifference(current, prev);

        // Assert
        expect(actual).toBe(expected);
      }
    );
  });
  describe('not yet had birthday this year', () => {
  const testCases = [
    { current: new Date(), prev: new Date('2001-02-29'), expected: 22 },
    { current: new Date(), prev:new Date('2013-02-29') , expected: 10 },
    { current: new Date(), prev: new Date('1997-02-29'), expected: 26 },
  ];

  test.each(testCases)(
    'should calculate age difference between $current and $prev to be $expected',
    ({ current, prev, expected }) => {
      // Assemble
      const sut = ageCalculator();

      // Act
      const actual = sut.calculateDifference(current, prev);

      // Assert
      expect(actual).toBe(expected);
    }
  );
});
describe('same date different year', () => {
  const testCases = [
    { current: new Date('2001-02-29'), prev: new Date('2011-02-29'), expected: 10 },
    { current: new Date('1999-03-15'), prev: new Date('2009-03-15'), expected: 10 },
    { current: new Date('1986-12-12'), prev: new Date('1997-12-12'), expected: 11 },
  ];

  test.each(testCases)(
    'should calculate age difference between $current and $prev to be $expected',
    ({ current, prev, expected }) => {
      // Assemble
      const sut = ageCalculator();

      // Act
      const actual = sut.calculateDifference(current, prev);

      // Assert
      expect(actual).toBe(expected);
    }
  );
});

 })
import { ageCalculator } from "../src/ageCalculator";

describe('ageCalculator', () => { 

  describe('date range', () => {
  const testCases = [
    { fromDate: new Date(), toDate: new Date('1985-03-04'),expected:38 },
    { fromDate: new Date(), toDate: new Date('1989-02-16'),expected:34 },
    { fromDate: new Date(), toDate: new Date('1958-03-31'),expected:65 },
  ];

  test.each(testCases)(
    'should calculate difference between $fromDate - $toDate to be $expected',
    ({ fromDate, toDate,expected }) => {
      // your test code here
     //Assemble
       const sut=ageCalculator()
      //Act 
       const acutual =sut.calculate(fromDate,toDate)
       
      //Assert
       expect(acutual).toBe(expected)
    }
  );
});
 })
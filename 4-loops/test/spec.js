describe('advanced types and loops', function() {
  var expect = chai.expect;

  describe('arrays', function() {

    it('variable arr should be an array', function() {
      expect(Array.isArray(arr)).to.equal(true);
    });

    it('variable arr1 should be an array', function() {
      expect(Array.isArray(arr1)).to.equal(true);
    });

    it('variale arr2 should be an array with at least 5 items in it', function() {
      expect(arr2.length >= 5).to.equal(true);
    });
  });

  describe('accessing in arrays and strings', function() {
    it('should assign val1 the first value in testArray', function() {
      expect(val1).to.equal('a');
    });

    it('should assign val2 the third value from testString', function() {
      expect(val2).to.equal('i');
    });

    it('should assign the second to last value from testArray to val3', function (){
      expect(val3).to.equal('g');
    });

    it('should assign the 13th value from testString to  val4', function() {
      expect(val4).to.equal('r');
    });

    it('assign the 5th value from testArray to val5', function() {
      expect(val5).to.equal(4);
    });

    it('assign the value at index 3 from testArray to val6', function() {
      expect(val6).to.equal('d');
    });

    it('assign the value at index 6 from testString to val7', function () {
      expect(val7).to.equal(' ');
    });
  });

  describe('creating objects', function () {

    it('should be an object with the correct number of key value pairs', function () {
      expect(Object.keys(myObj).length).to.equal(6);
    });

    it('myName should hold a string', function () {
      expect(typeof myObj.myName).to.equal('string');
    });

    it('myCity should hold a string', function () {
      expect(typeof myObj.myCity).to.equal('string');
    });

    it('myAge should have a number', function () {
      expect(typeof myObj.myAge).to.equal('number');
    });

    it('myTruth should hold a boolean', function () {
      expect(typeof myObj.myTruth).to.equal('boolean');
    });

    it('myMusic should be an array', function () {
      expect(Array.isArray(myObj.myMusic)).to.equal(true);
    });

    it('myMusic should have four items in it', function () {
      expect(myObj.myMusic.length).to.equal(4);
    });

    it('myFunc should be a function', function () {
      expect(typeof myObj.myFunc).to.equal('function');
    });

    it('myFunc should return true when invoked', function () {
      expect(myObj.myFunc()).to.equal(true);
    });
  });

  describe('accessing values in objects', function () {

    it('should access myCity from myObj', function () {
      expect(myCity).to.equal(myObj.myCity);
    });

    it('should access myName from myObj', function () {
      expect(myName).to.equal(myObj.myName);
    });

    it('should access myAge from myObj', function () {
      expect(myAge).to.equal(myObj.myAge);
    });

    it('should access myMusic from myObj', function () {
      expect(myMusic).to.equal(myObj.myMusic);
    });

    it('should access myFunc from myObj', function () {
      expect(myFunc).to.deep.equal(myObj.myFunc);
    });

    it('myFunc should return the same value as the method from myObj', function () {
      expect(myFunc()).to.equal(myObj.myFunc());
    });
  });

});

describe('loops', function() {
  var expect = chai.expect;

  describe('for loops', function() {

    it('should pass the example', function() {
      expect(forExample).to.equal(55);
    });

    it('for1 should have the values 0 - 10 added to it', function() {
      expect(for1).to.equal(55);
    });

    it('for2 should have the values 9 - 22 added to it', function() {
      expect(for2).to.equal(217);
    });

    it('for3 should have the even numbers from 0 - 10 added to it', function() {
      expect(for3).to.equal(30);
    });

    it('for4 should have the numbers 0 - -100 added to it', function() {
      expect(for4).to.equal(-5050);
    });

    it('for5 should sum the values from forArr', function() {
      expect(for5).to.equal(forArr.reduce(function (acc, val) {
        return acc += val;
      }, 0));
    });
  });

});



















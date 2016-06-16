describe('scope and functions', function() {
  var expect = chai.expect;

  describe('scope', function() {

    it('should have a global variable scope1 with a value of a string', function() {
      expect(typeof scope1).to.equal('string');
    });

    it('scope1 should hold the definition of scope', function() {
      expect(scope1).to.equal('scope is the set of variables, objects, and functions you have access to.');
    });

    it('should have a global variable called scope2', function() {
      expect(window.scope2).to.not.equal(null || undefined);
    });

    it('should have a global vaiable called scope3 with a value of 12', function() {
      expect(window.scope3).to.equal(12);
    });
  });

  describe('functions', function() {

    it('should assign a function to the variable add', function() {
      expect(typeof add).to.equal('function');
    });

    it('add should take two parameters, and return the sum of them', function() {
      expect(add(2, 2)).to.equal(4);
    });

    it('the add function should have a variable called scope1 with a value of 12', function() {
      expect(window.scope1).to.not.equal(scope1);
    });

    it('create a named function called square', function() {
      expect(typeof square).to.equal('function');
    });

    it('the square function should take a number, and return that number squared (multiplied by itself)', function() {
      expect(square(9)).to.equal(81);
    });

    it('should have a named function called thrice', function() {
      expect(typeof thrice).to.equal('function');
    });

    it('function thrice should return a local variable called a, that has a value of 10', function() {
      expect(thrice()).to.equal(10);
    });

    it('variable a should be in the local scope of the fuction thrice, and not available in the global scope', function() {
      expect(a).to.equal(undefined);
    });

    it('should have a function expression assigned to a variable, myFunc, which returns your name and your partner\'s names in a string', function() {
      expect(typeof myFunc()).to.equal('string');
    });
      
    it('should have a function expression assigned to a variable, myFunc, which returns your name in a string', function() {
      expect(myFunc().length).to.not.equal(0);
    });

    it('should have a function named myNewFunc', function() {
      expect(typeof myNewFunc).to.equal('function');
    });

    it('myNewFunc should have a variable called myFaveNum that holds a number within the scope of myNewFunc', function() {
      expect(myFaveNum).to.equal(undefined);
    });

    it('myNewFunc should return myFaveNum when invoked', function() {
      expect(myNewFunc()).to.equal(number);
    });
        
  });


});
// run tests at the command line with:
// $ METEOR_MOCHA_TEST_DIR=tests mrt


describe('curriculum', function () {

  describe('first category', function () {

    it('should', function () {
      chai.assert.equal(10, 10);
    });

  });
  describe('second category', function () {

    it('should', function () {
      chai.assert.equal("waffles", "waffles");
    });

  });

});

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

// run tests at the command line with:
// $ METEOR_MOCHA_TEST_DIR=tests mrt

var testId;

before(function () {
  SpecResults.insert({suites: [1,2,3,4,5]})
  testId = SpecResults.findOne({suites: [1,2,3,4,5]})._id
  console.log(testId)
});

console.log(testId)

after(function () {
  SpecResults.remove({suites: [1,2,3,4,5]})
});

var testDashboard = {
  _id: "7a869005-17ac-4e34-817d-332d39d734bc"
}

describe('specDashboard templates', function () {

  describe('studentStations template helper', function () {

    it('should return an array', function () {
      chai.assert.isArray(Template.specdashboard.studentStations());
    });

  });

  describe('suites template helper', function () {

    it('should return an array', function () {
      chai.assert.isArray(Template.specdashboard.suites.call(testDashboard));
    });

  });

});

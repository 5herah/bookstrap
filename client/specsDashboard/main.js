Template.specdashboard.studentStations = function () {
  var result = SpecResults.find().fetch();
  return result;
};

Template.specdashboard.suites = function () {
  var id = this._id;
  var resultObj = SpecResults.findOne({_id: this._id}, {$sort: {timestamp: -1}});
  var suitesArr = _.map(resultObj.suites, function (suite, key, object) {
    return {_id: id, suite: suite};
  });
  return suitesArr;
};

Template.specdashboard.specs = function () {
  console.log(this.suite)
  var id = this._id;
  var testsArr = [];
  if (this.suite) {
    _.each(this.suite.specs, function (spec, key, object) {
      testsArr.push(spec)
    });
  }
  console.log(testsArr)
  return testsArr;
};

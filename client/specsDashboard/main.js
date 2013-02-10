Template.specdashboard.studentStations = function () {
  var result = SpecResults.find().fetch();
  return result;
}

Template.specdashboard.individualSpecs = function () {
  var id = this._id
  var resultObj = SpecResults.findOne({_id: this._id}, {$sort: {timestamp: -1}});
  var suitesArr = _.map(resultObj.suites, function (suite, key, object) {
    return {_id: id, suite: suite};
  });
  return suitesArr;
}

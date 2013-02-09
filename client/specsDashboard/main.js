Template.specdashboard.studentStations = function () {
  return SpecResults.find().fetch();
}

Template.specdashboard.individualSpecs = function () {
  var resultObj = SpecResults.findOne({_id: this._id});
  var resultArr = _.map(resultObj, function (value, key, object) {
    return {_id: object._id, test: value};
  });
  console.log(resultArr);
  return resultArr
}

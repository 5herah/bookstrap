Meteor.Router.add('/specreports', 'POST', function () {
  var data = this.request.body.suites;
  console.log(data);
  var formattedObj = {}
  // formattedObj.

  SpecResults.insert(data);
});

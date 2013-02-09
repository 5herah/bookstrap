Meteor.Router.add('/specreports', 'POST', function (data) {
  var data = this.request.body;
  console.log(data);
  SpecResults.insert({lastresults: data.suites});
});

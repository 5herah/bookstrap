Meteor.Router.add('/specreports/testdata', 'POST', function () {
  var data = this.request.body.suites;
  data.users = this.request.body.users;
  data.timestamp = Date.now();
  console.log(data);
  SpecResults.insert(data);
});

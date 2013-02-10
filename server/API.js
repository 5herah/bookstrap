Meteor.Router.add('/specreports/testdata', 'POST', function () {
  var data = this.request.body.suites;
  // console.log(data);
  SpecResults.insert(data);
});

Meteor.Router.add('/specreports/users', 'POST', function () {
  console.log(this.request.body)
})

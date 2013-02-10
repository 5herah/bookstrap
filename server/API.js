Meteor.Router.add('/specreports/testdata', 'POST', function () {
  var data = {}
  data.suites = this.request.body.suites;
  data.users = this.request.body.users;
  data.timestamp = Date.now();
  if (SpecResults.findOne({users: data.users})) {
    SpecResults.update({users: data.users}, {users: data.users, suites: data.suites, timestamp: this.timestamp});
  } else {
    SpecResults.insert({users: data.users, suites: data.suites, timestamp: this.timestamp});
  }
});

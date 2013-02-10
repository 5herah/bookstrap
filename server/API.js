Meteor.Router.add('/specreports/jasmine', 'POST', function () {
  var data = {};
  data.suites = this.request.body.suites;
  data.users = this.request.body.users;
  data.timestamp = moment().format('MMM Do YYYY, h:mm:ss a');
  if (SpecResults.findOne({users: data.users})) {
    SpecResults.update({users: data.users}, {users: data.users, suites: data.suites, timestamp: data.timestamp});
  } else {
    SpecResults.insert({users: data.users, suites: data.suites, timestamp: data.timestamp});
  }
});

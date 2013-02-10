Meteor.methods({
  getFileSync: function (target) {
    var future = new Future();
    future.ret(fs.readFileSync(target, 'utf-8'));
    return future.wait();
  },
  getDirContentsSync: function (directory) {
    var future = new Future();
    future.ret(fs.readdirSync(directory, 'utf-8'));
    return future.wait();
  }
});

Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
                           {fields: {'services': 1 }});
});

Meteor.publish("profiles", function () {
  return Profiles.find({}, {fields: {secretInfo: 0}});
});

Meteor.publish("specresults", function () {
  return SpecResults.find({});
});

Meteor.publish("sprints", function () {
  return Sprints.find({}, {fields: {secretInfo: 0}});
});

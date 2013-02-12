Meteor.startup(function () {
  require  = __meteor_bootstrap__.require
  fs = require('fs');
  Future = require('fibers/future')
  var sprints = Sprints.find().fetch();
  for(var i = 0; i < sprints.length; i++){
    Sprints.update({_id: sprints[i]._id}, {$set:{sprintOrder: i}})
  }
});

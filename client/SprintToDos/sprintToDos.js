//todo: return the user flag to use for determining which view (student or admin) to serve

Template.sprintToDos.userType = function(){
  var userType = "the user is: " + Meteor.user();
  return userType;
}
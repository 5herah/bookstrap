Meteor.loginWithGithub({
  requestPermissions: ['user', 'public_repo']
}, function (err) {
  if (err)
    Session.set('errorMessage', err.reason || 'Unknown error');
});
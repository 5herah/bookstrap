Template.curriculumlist.rendered = function () {
  Meteor.call('getDirContentsSync', 'assets/readmes', function (error, result) {
    Session.set('dirContents', result)
  });
};

Template.curriculumlist.reposList = function () {
  return Repos.find()
}

Template.curriculumlist.events({
  'click #newreposubmit': function () {
    var newRepoName = $('#newreponame').val();
    Repos.insert({name: newRepoName});
    $('#newreponame').val('');
  }
});


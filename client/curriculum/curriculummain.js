Template.curriculummain.reposList = function () {
  return Repos.find()
}

Template.curriculummain.events({
  'click #newreposubmit': function () {
    var newRepoName = $('#newreponame').val();
    Repos.insert({name: newRepoName});
    $('#newreponame').val('');
  }
});

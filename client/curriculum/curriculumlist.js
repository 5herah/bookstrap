
Template.curriculumlist.rendered = function () {
  Meteor.call('getDirContentsSync', 'assets/readmes', function (error, result) {
    Session.set('dirContents', result);
  });
};

Template.curriculumlist.reposList = function () {
  return Session.get('dirContents');
};

Template.curriculumlist.events({
  'click a': function (e) {
    console.log(e.toElement.innerHTML);
    var path = window.location.pathname;
    var filename = path.split('/').slice(-1);
    Meteor.call('getFileSync', 'assets/readmes/' + filename, function (error, result) {
     Session.set('fileText', result);
    });
  },
  'click #newreposubmit': function () {
    var newRepoName = $('#newreponame').val();
    Repos.insert({name: newRepoName});
    $('#newreponame').val('');
  }
});

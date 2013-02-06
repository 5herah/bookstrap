Template.curriculumlist.getListings = function () {
  Meteor.call('getDirContentsSync', 'assets/readmes', function (error, result) {
    Session.set('dirContents', result)
  });
};

Template.curriculumlist.displayListings = function () {
  return Session.get('dirContents');
};

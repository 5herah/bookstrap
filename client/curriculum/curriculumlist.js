Template.curriculumlist.getListings = function () {
  Meteor.call('getDirContentsSync', 'public/readmes', function (error, result) {
    Session.set('dirContents', result)
  });
};

Template.curriculumlist.displayListings = function () {
  return Session.get('dirContents');
};

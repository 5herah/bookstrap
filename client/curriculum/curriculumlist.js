Template.curriculumlist.getListings = function () {
  Meteor.call('getDirContentsSync', 'public/readmes', function (error, result) {
    Session.set('dirContents', result);
  });
};

Template.curriculumlist.displayListings = function () {
  return Session.get('dirContents');
};

Template.curriculumlist.events({
  'click a': function (e) {
    console.log(e.toElement.innerHTML);
    var path = window.location.pathname;
    var filename = path.split('/').slice(-1);
    Meteor.call('getFileSync', 'public/readmes/' + filename, function (error, result) {
     Session.set('fileText', result);
    });
  }
});

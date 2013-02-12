Template.curriculumfile.getMarkdown = function () {
  var path = window.location.pathname;
  var filename = path.split('/').slice(-1);
  Meteor.call('getFileSync', 'public/readmes/' + filename, function (error, result) {
    Session.set('fileText', result);
  });
};

Template.curriculumfile.displayMarkdown = function () {
  return Session.get('fileText');
};

Template.curriculumfile.readmeTitle = function () {
  return window.location.pathname.split('/').slice(-1);
};

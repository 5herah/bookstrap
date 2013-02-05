Template.curriculumfile.getMarkdown = function () {
  var filename = 'grapheme.md'
  var text = '';
  Meteor.call('getFileSync', 'public/readmes/' + filename, function (error, result) {
    text = result;
    console.log(text)
    Session.set('fileText', result)
  });
  return text;
};

Template.curriculumfile.displayMarkdown = function () {
  return Session.get('fileText');
};

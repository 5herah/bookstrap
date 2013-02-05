Meteor.Router.add({

  '': function () {
    return 'curriculumlist'
  },

  '/curriculum': function () {
    // var list = Meteor.fs.readdirSync('public/readmes');
    return 'curriculumlist';
  },

  '/curriculum/:filename': function (filename) {
    return 'curriculumfile';
  },

  '*': 'not_found'
});

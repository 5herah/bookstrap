Meteor.Router.add({
  '/curriculum': function () {
    var list = Meteor.fs.readdirSync('public/readmes');
    return list;
  },

  '/curriculum/:filename': function (filename) {
    var text = Meteor.fs.readFileSync('public/readmes/' + filename);
    return text;
  },

  '*': 'not_found'
});
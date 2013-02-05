Meteor.methods({
  getFileSync: function (target) {
    var text = fs.readFileSync(target, 'utf-8')
    return text;
  }
});

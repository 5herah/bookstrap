Meteor.methods({
  getFileSync: function (target) {
    var text = fs.readFileSync(target, 'utf-8')
    return text;
  },
  getDirContentsSync: function (directory) {
    var list = fs.readdirSync(directory, 'utf-8');
    return list;
  }
});

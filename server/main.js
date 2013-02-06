Meteor.methods({
  getFileSync: function (target) {
    var future = new Future();
    future.ret(fs.readFileSync(target, 'utf-8'));
    return future.wait();
  },
  getDirContentsSync: function (directory) {
    var future = new Future();
    future.ret(fs.readdirSync(directory, 'utf-8'));
    return future.wait();
  }
});

// run tests at the command line with:
// $ METEOR_MOCHA_TEST_DIR=tests mrt

describe('curriculum', function () {

  describe('curriculumlist', function () {

    it('getListings should set a session variable with a string (async)', function () {
      Template.curriculumlist.getListings();
      var text = Session.get('dirContents');
      Meteor.setTimeout(function () {
        chai.assert.isString(text);
      }, 250);
    });

    it('displayListings should return a string (async)', function () {
      var text = Template.curriculumlist.displayListings();
      Meteor.setTimeout(function () {
        chai.assert.isString(text);
      }, 250);
    });
  });

  describe('curriculumfile', function () {

    it('getMarkdown should set a session variable with a string (async)', function () {
      Template.curriculumfile.getMarkdown();
      var text = Session.get('dirContents');
      Meteor.setTimeout(function () {
        chai.assert.isString(text);
      }, 250);
    });

    it('displayMarkdown should return a string (async)', function () {
      var text = Template.curriculumfile.displayMarkdown();
      Meteor.setTimeout(function () {
        chai.assert.isString(text);
      }, 250);
    });
  });
});

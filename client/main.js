Handlebars.registerHelper('navClassFor', function (nav, options) {
  return Session.equals('nav', nav) ? 'active' : ''
});
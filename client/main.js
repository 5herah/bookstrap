Handlebars.registerHelper('navClassFor', function (nav, options) {
  return Session.equals('mini-pages-router_nav', nav) ? 'active' : '';
});

Handlebars.registerHelper('isHome', function(nav){
  return Session.equals('mini-pages-router_nav', 'home');
});

Meteor.subscribe('userData');

Meteor.subscribe('specresults');

Meteor.subscribe('todos');

Meteor.subscribe('sprints');

Meteor.subscribe('calendar');

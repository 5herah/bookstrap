Meteor.pages({
  '/'                     : { to: 'home', as: 'root', nav: 'home'},
  '/curriculum'           : { to: 'curriculumlist', nav: 'curriculum' },
  '/curriculum/:filename' : { to: 'curriculumfile', nav: 'curriculum' },
  '/directory'            : { to: 'profileInfo', nav: 'directory' },
  '/sprintToDos'          : { to: 'sprintToDos', nav: 'todos' },
  '/tests'                : { to: 'tests' },
  '/specdashboard/basic'  : { to: 'basicspecdashboard', nav: 'specdashboard' },
  '/specdashboard/d3'     : { to: 'd3specdashboard', nav: 'specdashboard' },
  '/reflections'          : { to: 'reflections', nav: 'reflections'},
  '/settings'             : { to: 'settings' },
  '/calendar'             : { to: 'calendar', nav: 'calendar' },
  '*'                     : { to: 'not_found' }
});

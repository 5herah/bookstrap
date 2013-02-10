Meteor.pages({
  '/'                     : { to: 'home', as: 'root', nav: 'home'},
  '/curriculum'           : { to: 'curriculumlist', nav: 'curriculum' },
  '/curriculum/:filename' : { to: 'curriculumfile', nav: 'curriculum' },
  '/directory'            : { to: 'profileInfo', nav: 'directory' },
  '/sprintToDos'          : { to: 'sprintToDos', nav: 'todos' },
  '/tests'                : { to: 'tests' },
  '/specdashboard'        : { to: 'specdashboard', nav: 'specdashboard' },
  '/reflections'          : { to: 'reflections', nav: 'reflections'},
  '/reflections'          : { to: 'reflections' },
  '/calendar'             : { to: 'calendar', nav: 'calendar' },  
  '*'                     : { to: 'not_found' }
});

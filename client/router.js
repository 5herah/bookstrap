Meteor.pages({
  '/'                     : { to: 'home', as: 'root', nav: 'home'},
  '/curriculum'           : { to: 'curriculumlist', nav: 'curriculum' },
  '/curriculum/:filename' : { to: 'curriculumfile', nav: 'curriculum' },
  '/directory'            : { to: 'profileInfo', nav: 'directory' },
  '/sprintToDos'          : { to: 'sprintToDos', nav: 'todos' },
  '/tests'                : { to: 'tests' },
  '/specdashboard'        : { to: 'specdashboard', nav: 'specdashboard' },
  '/reflections'          : { to: 'reflections', nav: 'reflections'},
  '/addSprint'            : { to: 'addSprint', nav: 'addSprint' },
  '*'                     : { to: 'not_found' }
});

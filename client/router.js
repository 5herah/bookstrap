Meteor.pages({
  '/'                     : { to: 'home', as: 'root', nav: 'home'},
  '/curriculum'           : { to: 'curriculumlist', nav: 'curriculum' },
  '/curriculum/:filename' : { to: 'curriculumfile', nav: 'curriculum' },
  '/directory'            : { to: 'profileInfo', nav: 'directory' },
  '/sprintToDos'          : { to: 'sprintToDos', nav: 'todos' },
  '/tests'                : { to: 'tests' },
<<<<<<< HEAD
  '/reflections'          : { to: 'reflections' },
  '/settings'             : { to: 'settings' },
=======
  '/specdashboard'        : { to: 'specdashboard', nav: 'specdashboard' },
  '/reflections'          : { to: 'reflections', nav: 'reflections'},
  '/addSprint'            : { to: 'addSprint', nav: 'addSprint' },
>>>>>>> 4341feef1b63628474da1640a6755cfda5435fb7
  '*'                     : { to: 'not_found' }
});

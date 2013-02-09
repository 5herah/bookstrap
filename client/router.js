Meteor.pages({
  '/'                     : { to: 'home', as: 'root', nav: 'home'},
  '/curriculum'           : { to: 'curriculumlist', nav: 'curriculum' },
  '/curriculum/:filename' : { to: 'curriculumfile', nav: 'curriculum' },
  '/tests'                : { to: 'tests' },
  '/specdashboard'        : { to: 'specdashboard', nav: 'specdashboard' },
  '*'                     : { to: 'not_found' }
});

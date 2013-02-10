Meteor.pages({
  '/'                     : { to: 'home', as: 'root', nav: 'home'},
  '/curriculum'           : { to: 'curriculumlist', nav: 'curriculum' },
  '/curriculum/:filename' : { to: 'curriculumfile', nav: 'curriculum' },
  '/tests'                : { to: 'tests' },
  '/specdashboard'        : { to: 'specdashboard', nav: 'specdashboard' },
  '/prdashboard'          : { to: 'prdashboard', nav: 'prdashboard' },
  '*'                     : { to: 'not_found' }
});

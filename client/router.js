Meteor.pages({
  '/'                     : { to: 'home', as: 'root' },
  '/curriculum'           : { to: 'curriculumlist' },
  '/curriculum/:filename' : { to: 'curriculumfile' },
  '/directory'            : { to: 'profileInfo' },
  '/'                     : { to: 'home', as: 'root', nav: 'home'},
  '/curriculum'           : { to: 'curriculumlist', nav: 'curriculum' },
  '/curriculum/:filename' : { to: 'curriculumfile', nav: 'curriculum' },
  '/directory'            : { to: 'profileInfo' },
  '/tests'                : { to: 'tests' },
  '*'                     : { to: 'not_found' }
});

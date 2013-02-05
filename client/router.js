Meteor.pages({
  '/'                     : { to: 'home', as: 'root' },
  '/curriculum'           : { to: 'curriculumlist' },
  '/curriculum/:filename' : { to: 'curriculumfile' }
});

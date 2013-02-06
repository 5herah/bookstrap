Template.profileInfo.profileStuff = function(){
  console.log('twitc')
  return Profiles.find().fetch()
  var name;
  if(Session.get('profile')) {
    name = Profiles.findOne({_id: Session.get('profile')}).name;
  }
 return name;
};

Template.profileInfo.events({
  // 'keydown .name' : function(e) {
  //   if(e.which !== 13) return;
  //   e.preventDefault();
  //   var text = e.target.value;
  //   var profileId = Profiles.insert({name: text});
    
  //   Session.set('profile', profileId);
  // },
  'click .submit' : function(e){
    e.preventDefault();
    var name   = document.getElementById('name').value;
    var phone  = document.getElementById('phone').value;
    var email  = document.getElementById('email').value;
    var blog   = document.getElementById('blog').value;
    var handle = document.getElementById('handle').value;

    var profileId = Profiles.insert({ 
      name   : name,
      phone  : phone,
      email  : email,
      blog   : blog,
      handle : handle
    });
  }
});

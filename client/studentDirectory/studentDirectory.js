Template.studentInfo.studentStuff = function(){
  var name = "Please enter your Face!";
  if(Session.get('student')) {
    name = Students.findOne({_id: Session.get('student')}).name;
  }
 return name;
};

Template.studentInfo.events({
  'keydown .name' : function(e) {
    if(e.which !== 13) return;
    e.preventDefault();
    var text = e.target.value;
    var studentId = Students.insert({name: text});
    
    Session.set('student', studentId);
  }
})
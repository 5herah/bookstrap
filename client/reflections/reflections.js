Template.reflections.events({
	'click #submitPreReflection' : function(event){
		event.preventDefault();
		//insert this reflection into the sprint for this user.
		//Reflections.insert();
	},
	'click #submitPostReflection' : function(event){
		event.preventDefault();
		//insert this reflection into the sprint for this user.
		//Reflections.insert();
	},
	'click #submitPeerReflection' : function(event){
		event.preventDefault();
		//insert this reflection into the sprint for this user.
		//Reflections.insert();
	}
})

Template.reflections.sprints = function(){
	return Sprints.find({},{sort: {sprint: 1}});
}
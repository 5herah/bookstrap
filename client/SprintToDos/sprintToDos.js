//todo: return the user flag to use for determining which view (student or admin) to serve

Template.sprintToDos.userType = function(){
  //todo: return the userType, which is a flag that denotes whether this user is an admin or a student.
  //it will determine which view is served for the todo app.
}

//add todos (input form)
//display todos (list)
//integrate todos with sprints (split out according to which sprints they're associated with)

Template.toDosStudentView.toDoItems = function(){
	return Sprints.find({},{sort: {sprint: 1}});
}

Template.toDosAdminView.sprints = function(){
	return Sprints.find({},{sort: {sprint: 1}});
}

Template.toDosAdminView.events({
	'submit': function(event){
		event.preventDefault();
		var theSprints = $("option:selected").map(function(){ 
			return this.value 
		}).get();

		
		_.each(theSprints, function(val){
			//trying to find the toDo item of the sprint #[val]
			var insertedToDo = [];
			insertedToDo.push(Sprints.findOne({sprint: parseInt(val)},{toDoItem: 1}).toDoItem);
		  insertedToDo.push($('#theToDoItem').val());
			Sprints.update({sprint:parseInt(val)},{$set: {toDoItem:insertedToDo}});
		})
	}
})


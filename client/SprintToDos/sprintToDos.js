Template.toDosStudentView.toDos = function(){
	return ToDos.find({},{sort: {sprintName: 1}});
}

Template.toDosAdminView.sprints = function(){
	return Sprints.find({},{sort: {sprint: 1}});
}

Template.toDosAdminView.events({
	'submit': function(event){
		event.preventDefault();

		var chosenSprintNames = [];

		$("#multiple :selected").each(function() {
      chosenSprintNames.push($(this).text());
    });

		console.log($('#theToDoItem').val());

		var theSprintIDs = $.map(chosenSprintNames, function(value){	
			  var theID = Sprints.findOne({sprintName:value}, {_id:1})._id;

			  var newToDo = {sprintID: theID, sprintName: value, description: $('#theToDoItem').val()};
			  ToDos.insert(newToDo);

		});
		},
})

Template.toDosStudentView.events({
	'click .donebox': function(event){
		var row = event.target.parentElement.parentElement.parentElement;
		$(row).hide();

		//todo: remove this todo item from the user's todo items list (figure out how we are to handle the todos per user)

	}
})


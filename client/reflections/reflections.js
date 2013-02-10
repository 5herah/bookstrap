Template.reflections.events({
	'click .sprintToReflectOn' : function(){
		$('.reflectionBoxes').toggle('show');
		$('.sprintReflectionChoices').toggle('hide');
		var sprintAssessing = $('option:selected').text();
		$('.sprintReflectionTitle').html('<h3>' + sprintAssessing + '</h3>');
	},

	'click .sprintGoBackButton' : function(){
		$('.reflectionBoxes').toggle('hide');
		$('.sprintReflectionChoices').toggle('show');
	},

	'click #submitPreReflection' : function(event){
		event.preventDefault();
		var sprintAssessing = $('option:selected').text();

		var sprintAssessingID = Sprints.findOne({sprintName:sprintAssessing},{_id:1})._id;

		var preReflectionResponse = $('.preReflectionText').val();

		Reflections.insert({
			sprintID: sprintAssessingID,
			reflectionType: "preReflection",
			response: preReflectionResponse,
			student: Meteor.user()._id,
			postDate:	Date()
		});
	},

	'click #submitPostReflection' : function(event){
		event.preventDefault();
		var sprintAssessing = $('option:selected').text();

		var sprintAssessingID = Sprints.findOne({sprintName:sprintAssessing},{_id:1})._id;

		var postReflectionResponse = $('.postReflectionText').val();

		Reflections.insert({
			sprintID: sprintAssessingID,
			reflectionType: "postReflection",
			response: postReflectionResponse,
			student: Meteor.user()._id,
			postDate:	Date()
		});
	},

	'click #submitPeerReflection' : function(event){
		event.preventDefault();
		var sprintAssessing = $('option:selected').text();

		var sprintAssessingID = Sprints.findOne({sprintName:sprintAssessing},{_id:1})._id;

		var peerReflectionResponse = $('.peerReflectionText').val();

		Reflections.insert({
			sprintID: sprintAssessingID,
			reflectionType: "peerReflection",
			response: peerReflectionResponse,
			student: Meteor.user()._id,
			postDate:	Date()
		});
	}
})

Template.reflections.sprints = function(){
	return Sprints.find({},{sort: {sprint: 1}});
}
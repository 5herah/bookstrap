if (Meteor.isServer) {
  Meteor.startup(function () {
    Sprints.remove({});
    var toDoItems = ["Make a sculpture out of onions, a green tarp from your uncle's shed, and a calendar.",
      "Hop on one foot until you remember all the shitty things your mom told you about insurance when you were a kid.",
      "Buy a crow.",
      "Edit the ten commandments. Bonus point if there are now ten."
    ];
    for (var i = 0; i < toDoItems.length; i++) {
      Sprints.insert({sprint: i, toDoItem: toDoItems[i]});
    }
  });
}

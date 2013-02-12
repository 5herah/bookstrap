Meteor.subscribe('sprints');

Accounts.ui.config({requestPermissions: {google:
  ['https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/tasks']}}, {requestOfflineToken: {google: true}});


Template.sprints.sprint = function () {
  return Calendar.find({}, {sort: {sprintOrder: 1}});
};

Template.sprints.events({
  'click .icon-arrow-up' : function(e){
    e.preventDefault();

    if( this.sprintOrder !== 1){
      Calendar.update({sprintOrder: this.sprintOrder - 1}, {$inc: {sprintOrder: 1}});
      Calendar.update({_id: this._id}, {$inc: {sprintOrder: -1}});
    }
  },

  'click .icon-arrow-down' : function(e){
    e.preventDefault();
    var sprintsLength = Calendar.find().fetch().length;

    if( this.sprintOrder !==  sprintsLength ) {
      Calendar.update({sprintOrder: this.sprintOrder + 1}, {$inc: {sprintOrder: -1}});
      Calendar.update({_id: this._id}, {$inc: {sprintOrder: +1}});
    }
  }
});


Template.calendar.events({
  'click .btn' : function(e){
    e.preventDefault();
    var sprintName   = document.getElementById('sprintName').value;
    var startDate  = document.getElementById('startDate').value;
    var startTime = "09:00";
    var endTime = "20:00";
    var fecha = { "start" : startDate + "T" + startTime + ":00-08:00", "end" : startDate + "T" + endTime + ":00-08:00" };
    var newSprintId = Calendar.insert({ name : sprintName, fecha: fecha });

    var sprints = Calendar.find().fetch();
    Calendar.update({_id: newSprintId}, {$set:{sprintOrder: sprints.length}});

    gCal.insertEvent(sprintName, fecha, function(calendarEvent){
      Calendar.update({_id: newSprintId}, {$set:{
        calendarEventId: calendarEvent.id
      }});
    });
  }
});

var gCal = {
  insertEvent: function(summary, fecha, callback) {
    var Auth, event, eventData, url;
    url = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
    event = {
      summary: summary,
      start: {
        "dateTime": fecha.start
      },
      end: {
        "dateTime": fecha.end
      }
    };
    eventData = JSON.stringify(event);
    console.log(eventData);

    Auth = 'Bearer ' + Meteor.user().services.google.accessToken;

    return Meteor.http.post(url, {
      params: {
        key: 'mAcg5iwveUBVtO8MyYEqv3LOtgoaafd62eh02a3akp5qc7un0o@group.calendar.google.com'
      },
      data: event,
      headers: {
        'Authorization': Auth
      }
    }, function(err, result) {
      console.log(result);
      callback(result.data);
    });
  }
};

Template.sprints.formattedDate = function () {
  return moment(this.fecha.start).format('MMMM Do YYYY, dddd, h:mm:ss a');
};

Meteor.subscribe('sprints');

Accounts.ui.config({requestPermissions: {google: 
  ['https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/tasks']}}, {requestOfflineToken: {google: true}});

Template.calendar.events({
  'click .btn' : function(e){
    e.preventDefault();
    var sprintName   = document.getElementById('sprintName').value;
    var startDate  = document.getElementById('startDate').value;
    var startTime = "09:00"
    var endTime = "20:00"

    var fecha = { "start" : startDate + "T" + startTime + ":00-08:00", "end" : startDate + "T" + endTime + ":00-08:00" }

    console.log(fecha);

    var newSprintId = Sprints.insert({ name : sprintName, fecha: fecha })

    gCal.insertEvent(sprintName, fecha, function(calendarEvent){
      Sprints.update({_id: newSprintId}, {$set:{
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


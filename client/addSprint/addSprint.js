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
    var endDate  = document.getElementById('endDate').value;
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;

    var fecha = { "start" : startDate + "T" + startTime, "end" : endDate + "T" + endTime }

    console.log(fecha);

    // Sprints.insert({ name : sprintName, start : startDate + "T" + startTime, end : endDate })

    gCal.insertEvent(sprintName, fecha)
  }
});

var gCal = {
  insertEvent: function(summary, fecha) {
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
        return result.id;
    });
  }
};


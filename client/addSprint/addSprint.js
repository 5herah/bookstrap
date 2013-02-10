Accounts.ui.config({requestPermissions: {google: 
  ['https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/tasks']}}, {requestOfflineToken: {google: true}});

Template.addSprint.events({
  'click .btn' : function(e){
    e.preventDefault();
    var sprintName   = document.getElementById('sprintName').value;
    var startDate  = document.getElementById('startDate').value;
    var endDate  = document.getElementById('endDate').value;

    var fecha = { "start" : startDate, "end" : endDate }

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
        "date": fecha.start
      },
      end: {
        "date": fecha.end
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


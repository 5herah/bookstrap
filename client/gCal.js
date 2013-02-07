Accounts.ui.config({requestPermissions: {google: 
  ['https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/tasks']}}, {requestOfflineToken: {google: true}})

var gCal = {
  insertEvent: function(client, population, text, date) {
    var url = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
    var event = {
      summary: client,
      location: population,
      description: text,
      start: {
        "date": date
      },
      end: {
        "date": date
      }
    };
    var eventText = JSON.stringify(event);
    console.log(eventText);
    var Auth = 'User ' + Meteor.user().services.google.accessToken;
    return Meteor.http.post(url, {
      params: {
        key: 'mAcg5iwveUBVtO8MyYEqv3LO'
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
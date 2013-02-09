Accounts.ui.config({requestPermissions: {google: 
  ['https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/tasks']}}, {requestOfflineToken: {google: true}})

// var gCal = {
//   insertEvent: function(client, population, text, date) {
//     var url = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
//     var event = {
//       summary: client,
//       location: population,
//       description: text,
//       start: {
//         "date": date
//       },
//       end: {
//         "date": date
//       }
//     };
//     var eventText = JSON.stringify(event);
//     console.log(eventText);
//     var Auth = 'User ' + Meteor.user().services.google.accessToken;
//     Meteor.http.post(url, {
//       params: {
//         key: 'mAcg5iwveUBVtO8MyYEqv3LOtgoaafd62eh02a3akp5qc7un0o@group.calendar.google.com'
//       },
//       data: event,
//       headers: {
//         'Authorization': Auth
//       }
//     }, function(err, result) {
//       console.log(err)
//       console.log(result);
//       return result.id;
//     });
//   }
// };

var gCal;

gCal = {
  insertEvent: function(fecha) {
    var Auth, event, evento, url;
    url = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
    event = {
      start: {
        "date": fecha.start
      },
      end: {
        "date": fecha.end
      }
    };
    evento = JSON.stringify(event);
    console.log(evento);
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

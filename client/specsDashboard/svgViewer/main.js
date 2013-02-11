Template.d3specdashboard.studentStations = function () {
  var result = SpecResults.find().fetch();
  return result;
};

Template.d3report.rendered = function () {
  if(this.data.users) {
    console.log(this.data.users[0])
    var latestReport = SpecResults.findOne({users: this.data.users}, {$sort: {timestamp: -1}});
    console.log(latestReport)
  }
  if(latestReport) {
    JSONScrubber(latestReport);
    renderTestburst(latestReport);
  }
};

var JSONScrubber = function (reportJSON) {
  _(reportJSON).each(function (childvalue, childkey, parent) {
    // clean out null values
    if(childvalue === null) {
      delete parent.splice(childkey);
    // change keys to 'children' to fit d3 convention
    } else if (childkey === "specs" || childkey === "suites") {
      parent.children = childvalue;
    }
    if(typeof(childvalue) === "object"){
      JSONScrubber(childvalue)
    }
  });
};

Template.d3report.usernames = function () {
  if(this.users){
    return this.users[0]
  }
}
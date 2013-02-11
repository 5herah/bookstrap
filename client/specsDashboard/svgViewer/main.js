Template.d3specdashboard.studentStations = function () {
  var result = SpecResults.find().fetch();
  return result;
};

Template.d3specdashboard.rendered = function () {
  var latestReport = SpecResults.findOne({}, {$sort: {timestamp: -1}});
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
      console.log(childvalue)
      JSONScrubber(childvalue)
    }
  });
};

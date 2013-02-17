var renderTestburst = function (testJSON) {

  var w = 150,
      h = 150,
      r = Math.min(w, h) / 2,
      color = d3.scale.ordinal().domain([false,true]).range(["DD2222","22AA22"])
      // color = d3.scale.category20c();

  var selector = ".testburst-"+testJSON.users[0];

  var vis = d3.select(selector).append("svg:svg")
      .attr("width", w)
      .attr("height", h)
    .append("svg:g")
      .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

  var partition = d3.layout.partition()
      .sort(null)
      .size([2 * Math.PI, r * r])
      .value(function(d) { return 1; });

  var arc = d3.svg.arc()
      .startAngle(function(d) { return d.x; })
      .endAngle(function(d) { return d.x + d.dx; })
      .innerRadius(function(d) { return Math.sqrt(d.y); })
      .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

  var path = vis.data([testJSON]).selectAll("path")
      .data(partition.nodes)
    .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .attr("text", function(d) { return d.description })
      .style("stroke", "#fff")
      .style("fill", function(d) { return color(d.passed); })

  // Interpolate the arcs in data space.
  function arcTween(a) {
    var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
    return function(t) {
      var b = i(t);
      a.x0 = b.x;
      a.dx0 = b.dx;
      return arc(b);
    };
  }
}

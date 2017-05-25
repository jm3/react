// via https://bl.ocks.org/mbostock/b07f8ae91c5e9e45719c

const d3 = require('d3');
console.log("D3", d3.version, "visible to playground")

export default function rainbow() {

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    size = Math.max(width, height);

var color = d3.scaleSequential(function(t) {
  return d3.hsl(t * 360, 1, 0.5) + "";
})
    .domain([0, 2 * Math.PI]);

var circles = d3.packSiblings(d3.range(2000)
    .map(d3.randomUniform(8, 26))
    .map(function(r) { return {r: r}; }))
  .filter(function(d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500; });

svg
  .select("g")
  .selectAll("circle")
  .data(circles)
  .enter().append("circle")
    .style("fill", function(d) { return color(d.angle = Math.atan2(d.y, d.x)); })
    .attr("cx", function(d) { return Math.cos(d.angle) * (size / Math.SQRT2 + 30); })
    .attr("cy", function(d) { return Math.sin(d.angle) * (size / Math.SQRT2 + 30); })
    .attr("r", function(d) { return d.r - 0.25; })
  .transition()
    .ease(d3.easeCubicOut)
    .delay(function(d) { return Math.sqrt(d.x * d.x + d.y * d.y) * 10; })
    .duration(1000)
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });

}

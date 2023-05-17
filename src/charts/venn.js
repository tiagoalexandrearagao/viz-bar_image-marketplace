import { max } from "d3";
import $ from "jquery";

export function vennChart(params) {
  var toggleChart = function (type) {};

  var d3 = params.d3;
  var width = params.width;
  var margin = params.margin;
  var height = params.height;
  var data = params.data;
  var barNotSelected = params.barNotSelected;
  var queryResponse = params.queryResponse;
  var titleChart = params.titleGraphic;
  var details = params.details;
  var fontSizePercent = params.fontSizePercent;

  var strokeWidth = params.strokeWidth;
  var dimensionTitle = params.dimensionTitle;
  var measureTitle = params.measureTitle;

  var vis = params.vis;

  var fontFamily = "'Quicksand', sans-serif";
  var fontWeightBold = "bold";
  var fontWeightNormal = "normal";

  // var innerRadius =  Math.min(width, height) / 1.2
  //ar radius = Math.min(width, height) / 2.2
  var innerRadius = 90;
  var radius = 100;

  var transformWidthG =
    parseInt(width) + parseInt(margin.left) + parseInt(margin.right) - 135; //+ parseInt(margin.left)
  var transformHeightG =
    parseInt(height) +
    parseInt(margin.top) +
    parseInt(margin.bottom - 20) -
    100; //+ parseInt(margin.left)

  var tweenDuration = 500;
  var strokeWidth = params.strokeWidth;
  var centerTitle = innerRadius == 0 ? "" : "";
  var formattedData = [];

  var pie = d3.pie().value(function (d) {
    return d.measure_count;
  });

  console.log("width", width);
  console.log("height", height);
  var colors = Array();

  colors = ["#FD8A64", "#1EC370", "#6A52FA", "#20B9FC"];

  try {
    if (details.crossfilters.length > 0) {
      var i = -1;

      data = data.filter(function (d) {
        i++;
        //console.log('d[queryResponse.fields.dimensions[0].name]["value"]', d[queryResponse.fields.dimensions[0].name]["value"])
        if (
          !details.crossfilters[0].values.includes(
            d[queryResponse.fields.dimensions[0].name]["value"]
          )
        ) {
          return (colors[i] = barNotSelected[0]);
        } else {
          return (colors[i] = colors[i]);
        }
      });
    }
  } catch (error) {}

  // format  data
  data.forEach(function (d) {
    formattedData.push({
      measure_count: d[queryResponse.fields.measures[0].name]["value"],
      dimension_values: d[queryResponse.fields.dimensions[0].name]["value"],
    });
  });

  if (d3.select("#toolTip").size() == 0) {
    var div = d3.select("body").append("div").attr("id", "toolTip");
  } else {
    var div = d3.select("#toolTip");
  }

  d3.select("#chart").attr("style", "overflow:hidden").html(`<h3 style="
    font-weight: bold;
    font-size: 88px;
    color:white; 
    position:absolute; 
    margin-left:70px;
    margin-top:100px;
   ">
    <span style="font-family: ${fontFamily}; font-weight:${fontWeightNormal} ;
    ">     
    ${titleChart}
    </span>
    </h3>`);

  var svgTitle = d3.select("#chart");

  d3.select("body").attr(
    "style",
    `background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: 
    linear-gradient(210.38deg, #2573E9 -23.6%, rgba(47, 187, 236, 0) 62.05%), 
    linear-gradient(149.62deg, #2573E9 -34.04%, #C006DE 147.39%);`
  );

  d3.select("html").attr("style", `height:110%`);

  svgTitle
    .append("div")
    .attr("id", "name-app")
    .attr("style", "position:absolute; float:right; z-index:-1;")
    .html(
      `<svg aria-hidden="true" focusable="false" id="svg-logo" width="562" height="512" viewBox="0 0 562 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M281.001 117.633C217.761 117.633 167.05 168.941 167.05 231.584C167.05 294.227 217.761 345.535 281.001 345.535C344.241 345.535 395.549 294.227 395.549 231.584C394.952 168.344 344.241 117.633 281.001 117.633ZM281.001 117.633C217.761 117.633 167.05 168.941 167.05 231.584C167.05 294.227 217.761 345.535 281.001 345.535C344.241 345.535 395.549 294.227 395.549 231.584C394.952 168.344 344.241 117.633 281.001 117.633ZM472.499 364.04C411.645 370.603 344.229 371.796 280.989 371.796C217.749 371.796 150.333 370.603 89.4797 364.04C72.1782 362.25 62.6325 358.074 60.2461 338.983C56.6665 303.783 56.6665 267.987 56.6665 231.594C56.6665 195.201 56.6665 158.809 60.2461 124.206C62.0359 105.114 71.5816 100.938 89.4797 99.1484C150.333 92.5858 217.749 91.3926 280.989 91.3926C344.229 91.3926 411.645 92.5858 472.499 99.1484C490.397 100.938 499.943 105.114 501.732 124.206C505.312 159.405 505.312 195.201 505.312 231.594C505.312 267.987 505.312 303.783 501.732 338.983C499.346 357.477 489.8 362.25 472.499 364.04ZM281 -50C125.883 -50 0 76.4798 0 231C0 385.52 125.883 512 281 512C436.117 512 562 385.52 562 231C562 76.4798 436.117 -50 281 -50ZM281.001 117.633C217.761 117.633 167.05 168.941 167.05 231.584C167.05 294.227 217.761 345.535 281.001 345.535C344.241 345.535 395.549 294.227 395.549 231.584C394.952 168.344 344.241 117.633 281.001 117.633Z" fill="white"/>
</svg>    `
    );

  var sets = formattedData;

  var svgContainer = d3
    .select("#chart")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  var venngroup = svgContainer.append("g").attr("id", "venngroup");

  var chart = venn.VennDiagram().width(500).height(500).styled(false);

  var div = d3.select("#venngroup");
  div.datum(sets).call(chart);
  var tooltip = d3
    .select("#tooltell")
    .append("div")
    .attr("class", "venntooltip");
  div
    .selectAll("path")
    .style("stroke-opacity", 0)
    .style("stroke", "rgba(22,22,22,1)")
    .style("stroke-width", 2)
    .style("transform-origin", "50% 50%");

  div
    .selectAll("g.venn-area")
    .on("mouseover", function (d, i) {
      // sort all the areas relative to the current item
      venn.sortAreas(div, d);
      // Display a tooltip with the current size
      tooltip.transition().duration(300).style("opacity", 1);
      tooltip.text(d.data);

      // highlight the current path
      var selection = d3.select(this).transition("tooltip").duration(300);
      selection
        .select("path")
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1)
        .style("transform", "scale(1.01,1.01)")
        .style("transform-origin", "50% 50%");
    })

    .on("mouseout", function (d, i) {
      tooltip.transition().duration(500).style("opacity", 0);
      var selection = d3.select(this).transition("tooltip").duration(400);
      selection
        .select("path")
        .style("fill-opacity", d.sets.length == 1 ? 1 : 1)
        .style("stroke-opacity", 0)
        .style("transform", "scale(1,1)")
        .style("transform-origin", "50% 50%");
    });

  //

  var myLabel = svg
    .append("foreignObject")
    .attr({
      height: 150,
      width: 100, // dimensions determined based on need
      transform: "translate(0,0)", // put it where you want it...
    })
    .html('<div class"style-me"><p>My label </p></div>');

  var stuffToBeWrapped = d3.selectAll("svg");

  stuffToBeWrapped.each(function () {
    d3.select(this.childNode)
      .insert("g", function () {
        return this;
      })
      .attr("class", "wrapper")
      .append(function () {
        return this;
      });
  });

  //novo fim
  return svg;
}
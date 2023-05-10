import { max } from "d3";

export function banner(params) {
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
  console.log("var data após o filtro", data);
  console.log("details", details);

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

  d3.select("#chart").attr("style", "overflow:hidden")
    .html(`<h3 style="position:absolute; margin-left:10px;margin-top:8px;">
                        <span style="font-family: ${fontFamily}; font-weight:${fontWeightNormal} ;
                       ">     
                        ${titleChart}
                        </span>
                        </h3>`);

  var svgTitle = d3.select("#chart");

  // d3.select("#vis").attr(
  //   "style",
  //   `background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background: linear-gradient(210.38deg, #2FE1EC -23.6%, rgba(47, 187, 236, 0) 62.05%), linear-gradient(149.62deg, #2573E9 -34.04%, #C006DE 147.39%);`
  // );

  d3.select("body").attr(
    "style",
    `background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: linear-gradient(210.38deg, #2FE1EC -23.6%, rgba(47, 187, 236, 0) 62.05%), linear-gradient(149.62deg, #2573E9 -34.04%, #C006DE 147.39%);`
  );

  // //texto lateral percentual
  // svgTitle
  //   .append("span")
  //   .data(pie(formattedData))
  //   .attr("fill", "#333")
  //   .text(function (d) {
  //     return (
  //       String(
  //         parseFloat(
  //           ((d.endAngle - d.startAngle) / (2 * Math.PI)) * 100
  //         ).toFixed(0)
  //       ) + "%"
  //     );
  //   })
  //   .attr(
  //     "style",
  //     `margin-left:13px; margin-top:80px;position:absolute; font-family: ${fontFamily};font-weight:${fontWeightBold} ; font-size:18px; color:#333`
  //   );

  // //texto lateral value
  // svgTitle
  //   .append("span")
  //   .data(pie(formattedData))
  //   .text(function (d) {
  //     return d.data.dimension_values;
  //   })
  //   .attr(
  //     "style",
  //     `margin-left:13px; margin-top:100px;position:absolute; font-family: ${fontFamily};font-weight:${fontWeightNormal} ;font-size:12px`
  //   );

  //novo fim
  return svgTitle;
}
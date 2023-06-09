import { max } from "d3";
import $ from "jquery";

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

  var vis = params.vis;

  console.log("queryResponse", queryResponse);

  var fontFamily = "'Quicksand', sans-serif";
  var fontWeightBold = "bold";
  var fontWeightNormal = "normal";

  // var innerRadius =  Math.min(width, height) / 1.2
  //ar radius = Math.min(width, height) / 2.2
  var innerRadius = 90;
  var radius = 100;

  var transformWidthG =
    parseInt(width) + parseInt(margin.left) + parseInt(margin.right) - 135;
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

  var ajustaButton = [];

  var selectedButton = 1;

  try {
    if (details.crossfilters.length > 0) {
      for (var i = 0; i < details.crossfilters.length; i++) {
        selectedButton =
          details.crossfilters[i].values[
            details.crossfilters[i].values.length - 1
          ];
      }
    }
  } catch (error) {}

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
  if (params.bannerFilterEnabled == "true") {
    data.forEach(function (d) {
      formattedData.push({
        measure_count: d[queryResponse.fields.measures[0].name]["value"],
        dimension_values: d[queryResponse.fields.dimensions[0].name]["value"],
      });
    });
  } else {
    // formattedData.push({
    //   measure_count: d[queryResponse.fields.measures[0].name]["value"]
    // });
  }

  if (d3.select("#toolTip").size() == 0) {
    var div = d3.select("body").append("div").attr("id", "toolTip");
  } else {
    var div = d3.select("#toolTip");
  }

  if (params.bannerFilterEnabled == "true") {
    var title_filter_button = "Usuários ativos nos últimos:";
    var margin_title_top = "100";
  } else {
    var title_filter_button = "";
    var margin_title_top = "125";
  }

  d3.select("#chart").attr("style", "overflow:hidden").html(`<h3 style="
    font-weight: bold;
    font-size: 88px;
    color:white; 
    position:absolute; 
    margin-left:70px;
    margin-top:${margin_title_top}px;
   ">
    <span style="font-family: ${fontFamily}; font-weight:${fontWeightNormal} ;
    ">     
    ${titleChart}
    </span>
    </h3><br>
    <span style="
    font-family: ${fontFamily}; 
    font-weight:${fontWeightNormal} ;   
    font-size: 13px;
    color:white; 
    position:absolute; 
    margin-left:70px;
    margin-top:225px;
   ">${title_filter_button}</span><br>
    `);

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
      `<svg aria-hidden="true" 
      focusable="false" 
      id="svg-logo" 
      width="562" 
      height="512" 
      viewBox="0 0 562 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" 
fill-rule="evenodd" 
clip-rule="evenodd" 
d="M281.001 117.633C217.761 117.633 167.05 168.941 167.05 231.584C167.05 294.227 217.761 345.535 281.001 345.535C344.241 345.535 395.549 294.227 395.549 231.584C394.952 168.344 344.241 117.633 281.001 117.633ZM281.001 117.633C217.761 117.633 167.05 168.941 167.05 231.584C167.05 294.227 217.761 345.535 281.001 345.535C344.241 345.535 395.549 294.227 395.549 231.584C394.952 168.344 344.241 117.633 281.001 117.633ZM472.499 364.04C411.645 370.603 344.229 371.796 280.989 371.796C217.749 371.796 150.333 370.603 89.4797 364.04C72.1782 362.25 62.6325 358.074 60.2461 338.983C56.6665 303.783 56.6665 267.987 56.6665 231.594C56.6665 195.201 56.6665 158.809 60.2461 124.206C62.0359 105.114 71.5816 100.938 89.4797 99.1484C150.333 92.5858 217.749 91.3926 280.989 91.3926C344.229 91.3926 411.645 92.5858 472.499 99.1484C490.397 100.938 499.943 105.114 501.732 124.206C505.312 159.405 505.312 195.201 505.312 231.594C505.312 267.987 505.312 303.783 501.732 338.983C499.346 357.477 489.8 362.25 472.499 364.04ZM281 -50C125.883 -50 0 76.4798 0 231C0 385.52 125.883 512 281 512C436.117 512 562 385.52 562 231C562 76.4798 436.117 -50 281 -50ZM281.001 117.633C217.761 117.633 167.05 168.941 167.05 231.584C167.05 294.227 217.761 345.535 281.001 345.535C344.241 345.535 395.549 294.227 395.549 231.584C394.952 168.344 344.241 117.633 281.001 117.633Z" fill="white"/>
</svg>    `
    );

  var buttonFilters = d3.select("#chart");

  var styleFont = `font-family: ${fontFamily};  font-weight: ${fontWeightBold}; `;

  if (params.bannerFilterEnabled == "true") {
    buttonFilters.append("div").attr("id", "filters").html(`
 
  <button data-value="6" class="button-filter${
    selectedButton == 6 ||
    selectedButton == undefined ||
    selectedButton == "undefined" ||
    selectedButton == "" ||
    selectedButton == null ||
    selectedButton == []
      ? "-active"
      : ""
  }" style="${styleFont};  ">> 12 meses </button>
  <button data-value="5" class="button-filter${
    selectedButton == 5 ? "-active" : ""
  }" style="${styleFont};  "> 12 meses </button>
  <button data-value="4" class="button-filter${
    selectedButton == 4 ? "-active" : ""
  }" style="${styleFont}; "> 6 meses </button>
  <button data-value="3" class="button-filter${
    selectedButton == 3 ? "-active" : ""
  }" style="${styleFont}; "> 3 meses </button>
  <button data-value="2" class="button-filter${
    selectedButton == 2 ? "-active" : ""
  }" style="${styleFont}; "> 2 meses </button>
  <button id="btn_1" data-value="1" class="button-filter${
    selectedButton == 1 ? "-active" : ""
  }" style="${styleFont}; "> 1 mês </button>
  `);

    console.log("selectedButton", selectedButton);

    var current_filters = "";

    for (var val in queryResponse.applied_filters) {
      var key_filter = queryResponse.applied_filters[val].field.label_short;
      var value_filter = queryResponse.applied_filters[val].value;

      current_filters =
        current_filters +
        `<span class="button-filter-selected">${key_filter}:  ${value_filter}</span>`;
    }

    buttonFilters
      .append("div")
      .attr("id", "filters-selected")
      .html(current_filters);

    var dimension = Array();

    d3.selectAll(".button-filter").on("click", function (d) {
      try {
        var data_value = $(this).attr("data-value");

        switch (parseInt(data_value)) {
          case 1:
            data_value = [1];
            break;
          case 2:
            data_value = [1, 2];
            break;
          case 3:
            data_value = [1, 2, 3];
            break;
          case 4:
            data_value = [1, 2, 3, 4];
            break;
          case 5:
            data_value = [1, 2, 3, 4, 5];
            break;
          case 6:
            data_value = [1, 2, 3, 4, 5, 6];
            break;
        }

        dimension["pug.flag_partition"] = {
          field: "pug.flag_partition",
          value: data_value,
        };

        var payload = {
          event: d,
          row: dimension,
        };

        LookerCharts.Utils.toggleCrossfilter(payload);

        //teste update filter
        vis.trigger("updateFilters", [
          {
            "pug.interactions": data_value,
          },
        ]);

        vis.trigger("filter", [
          {
            "pug.interactions": data_value,
          },
        ]);

        vis.trigger("updateFilters", [
          {
            field: "pug.tier3",
            value: "Terror",
            run: true,
          },
        ]);

        vis.trigger("filter", [
          {
            field: "pug.tier3",
            value: "Romance",
            run: true,
          },
        ]);
      } catch (error) {
        console.log(error);
      }

      console.log("pay", vis);
    });
  }
  var svgEnvSegment = d3.select("#chart");
  //href="#drillmenu"
  // svgEnvSegment
  //   .append("div")
  //   .attr("id", "env-segment")
  //   .attr(
  //     "style",
  //     `
  //     position:absolute;
  //     z-index:99999999;
  //     display: flex;
  //     right:10px;
  //     padding: 10px 20px;
  //     justify-content: center;
  //     width: 146px;
  //     height: 22px;
  //     float:right;
  //     top: 7px;
  //     background: #FFFFFF;
  //     border-radius: 6px;`
  //   ).html(`
  // <span
  // class="cell-clickable-content"
  // rel="noopener noreferrer"
  // id="drillmenu" style="width: 115px;
  // height: 20px;

  // /* caption semi-bold */

  // font-family: ${fontFamily};
  // font-weight: ${fontWeightBold};
  // font-weight: 600;
  // font-size: 14px;
  // line-height: 20px;
  // /* identical to box height, or 143% */

  // text-align: center;

  // /* GC Blue Gradient */

  // background: linear-gradient(106.57deg, #9E6DE4 6.64%, #2E56FF 49.62%, #00B8FF 97.33%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // background-clip: text;
  // text-fill-color: transparent;
  // /* Inside auto layout */
  // flex: none;
  // order: 0;
  // cursor:pointer;
  // flex-grow: 0;"> Enviar segmento</span>

  // <!--a
  // target="_blank"
  // href="https://globo.cloud.looker.com/embed/dashboards/24"
  // style="
  // text-decoration:none;
  // color:#fff;
  // position:absolute;
  // z-index:99999999;
  // display: flex;
  // right:180px;
  // padding: 10px 20px;
  // justify-content: center;
  // width: 146px;
  // height: 22px;
  // float:right;
  // top: 7px;
  // font-family: ${fontFamily};
  // font-weight: ${fontWeightNormal};
  // font-size:11px;
  // ">
  // Onboarding
  // </a-->

  // `);

  d3.select("#svg-logo").attr("transform", function () {
    const resize = width / 1.65;
    return `translate(${resize},-100)`;
  });

  //d3.select("#drillmenu").attr("href", "drillmenu");

  d3.select("#drillmenu").on("click", function (d) {
    try {
      console.log(
        "banner links",
        queryResponse.data[0]["globo_id.send_segment"].links
      );
      console.log("banner links", d);
      console.log("banner links", LookerCharts);

      LookerCharts.Utils.openDrillMenu({
        links: queryResponse.data[0]["globo_id.send_segment"].links,
        event: d,
      });

      // var payload = {
      //   url: "https://globo.cloud.looker.com/embed/dashboards/97?Usu%C3%A1rios+ativos+nos+%C3%BAltimos+meses=2",
      //   event: d,
      //   useModal: true,
      //   modalOptions: {},
      // };
      // var obj = JSON.parse(JSON.stringify(payload));

      // console.log("banner links obj", obj);

      // LookerCharts.Utils.openUrl(obj);
    } catch (error) {
      console.log("banner", error);
    }
  });

  //novo fim
  return svgTitle;
}

export const baseOptions = {
  title_graphic: {
    section: "1. Main",
    type: "string",
    label: "Title",
  },
  title_font_size: {
    section: "1. Main",
    type: "string",
    label: "Title font size",
  },
  default_icon: {
    section: "1. Main",
    type: "string",
    label: "Title Icon <i>",
    default: "",
  },
  chart_type: {
    section: "1. Main",
    type: "string",
    label: "Chart type",
    default: "bar",
    display: "select",
    values: [
      { Bar: "bar" },
      { "Simple Bar": "bar_simple" },
      { "Pie|Donut": "donut" },
      { Banner: "banner" },
      { Insights: "insights" },
      { Venn: "venn" },
    ],
  },
  measure_title: {
    section: "2. Layout",
    type: "string",
    label: "Measure title",
    default: "",
  },
  dimension_title: {
    section: "2. Layout",
    type: "string",
    label: "Dimension title",
    default: "",
  },
  color_not_selected: {
    section: "2. Layout",
    type: "array",
    display: "color",
    label: "Color when not selected",
    default: "#dedede",
  },
  side_margin: {
    section: "2. Layout",
    type: "string",
    label: "Left and right margin of the chart",
    default: "40",
    display: "select",
    values: [
      { 0: "0" },
      { 10: "10" },
      { 20: "20" },
      { 30: "30" },
      { 40: "40" },
      { 50: "50" },
      { 60: "60" },
      { 70: "70" },
      { 80: "80" },
      { 90: "90" },
      { 100: "100" },
      { 120: "120" },
      { 140: "140" },
      { 160: "160" },
      { 180: "180" },
      { 200: "200" },
    ],
  },

  font_size_percent: {
    section: "2. Layout",
    type: "string",
    label: "Percentage font size",
    default: "11",
  },
  stroke_width: {
    section: "2. Layout",
    type: "string",
    label: "Stroke width",
    display: "select",
    default: "0",
    values: [
      { 0: "0" },
      { 1: "1" },
      { 2: "3" },
      { 3: "3" },
      { 4: "4" },
      { 5: "5" },
      { 6: "6" },
      { 7: "7" },
      { 8: "8" },
      { 9: "9" },
      { 10: "10" },
    ],
  },
  number_format: {
    section: "4. Format",
    type: "string",
    label: "Number format",
    display: "select",
    default: "normal",
    values: [{ Percent: "percent" }, { Normal: "normal" }],
  },

  first_dimension: {
    section: "3. Bar|Venn",
    type: "string",
    label: "Dimension values OR sets",
    default: "",
  },
  second_dimension: {
    section: "3. Bar|Venn",
    type: "string",
    label: "Dimension color OR size",
    default: "",
  },
  third_dimension: {
    section: "3. Bar|Venn",
    type: "string",
    label: "Dimension with base64 image OR label",
    default: "",
  },
};

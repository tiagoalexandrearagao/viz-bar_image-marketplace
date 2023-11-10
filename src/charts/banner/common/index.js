export const options = {
  title_graphic: {
    section: "1. Main",
    type: "string",
    label: "1 Title",
  },
  default_icon: {
    section: "1. Main",
    type: "string",
    label: "2. Title Icon <i>",
    default: "",
  },
  font_size: {
    section: "2. Layout",
    type: "string",
    label: "Table Font Size",
    default: "11",
  },
  font_weight: {
    section: "2. Layout",
    type: "string",
    label: "Table Font Weight",
    display: "select",
    values: [{ normal: "normal" }, { bold: "bold" }],
    default: "normal",
  },
  font_family: {
    section: "2. Layout",
    type: "string",
    label: "Table Font Family",
    display: "select",
    values: [{ "'Quicksand', sans-serif": "'Quicksand', sans-serif" }],
    default: "'Quicksand', sans-serif",
  },
  font_color: {
    section: "2. Layout",
    type: "string",
    display: "color",
    label: "Table Font Color",
    default: "#333333",
  },
};

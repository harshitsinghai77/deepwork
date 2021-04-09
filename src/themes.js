export const themePrimaryColor = "rgb(92, 229, 180)";

export const theme = {
  global: {
    colors: {
      brand: themePrimaryColor,
    },
  },
  rangeInput: {
    thumb: {
      color: "white",
      extend: {
        height: "14px",
        width: "14px",
        marginTop: "-6px",
        marginLeft: "-7px",
      },
    },
    track: {
      color: "white",
      height: "2px",
    },
    extend: {
      boxShadow: "none",
    },
  },
  checkBox: {
    color: themePrimaryColor,
    border: {
      color: themePrimaryColor,
    },
    hover: {
      border: {
        color: themePrimaryColor,
      },
    },
  },
  table: {
    body: {
      align: "start",
      pad: { horizontal: "large", vertical: "small" },
      border: "horizontal",
    },
    header: {
      align: "start",
      border: "bottom",
      fill: "horizontal",
      pad: { horizontal: "large", vertical: "xsmall" },
      verticalAlign: "bottom",
    },
  },
};

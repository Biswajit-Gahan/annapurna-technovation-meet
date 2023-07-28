import { css } from "styled-components";

const constants = {
  colors: {
    white: "#FFFFFF",
    offWhite: "#F5F5F5",
    black: "#242424",
    offBlack: "#545454",
    annapurnaGreen: "#5EBD2B",
    annapurnaOrange: "#E9721A",
    annapurnaPurple: "#5C4385",
    error: "#E62525",
  },

  fontSizes: {
    defaultParagraph: "14px",
    defaultIcon: "20px",
  },

  boxShadow: css`
    -webkit-box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  `,
};

export default constants;
import styled from "styled-components";
import constants from "../../utils/constants";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  min-height: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${constants.colors.white};

  .footer-text {
    font-size: ${constants.fontSizes.defaultParagraph};
    color: ${constants.colors.black};
  }

  .important {
    color: ${constants.colors.annapurnaOrange};
    cursor: pointer;
  }
`;
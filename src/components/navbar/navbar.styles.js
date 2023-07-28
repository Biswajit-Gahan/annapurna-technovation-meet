import styled from "styled-components";
import constants from "../../utils/constants";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  min-height: 70px;
  max-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${constants.colors.white};

  .brand-logo {
    width: auto;
    height: 55px;
  }

  .navbar-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .navbar-item {
    list-style: none;

    &:hover {
      color: ${constants.colors.annapurnaOrange};
    }
  }

  .navbar-item a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    font-size: ${constants.fontSizes.defaultParagraph};
    font-weight: 600;
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 5px;
  }

  .navbar-item .nav-icons {
    color: inherit;
    font-size: ${constants.fontSizes.defaultIcon};
  }
`;
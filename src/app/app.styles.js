import styled from "styled-components";
import constants from "../utils/constants";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a.active {
    color: ${constants.colors.annapurnaOrange};
  }
`;
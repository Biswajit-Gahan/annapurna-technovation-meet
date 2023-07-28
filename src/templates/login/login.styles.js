import styled from "styled-components";
import constants from "../../utils/constants";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-direction: column;
    background-color: ${constants.colors.white};
    padding: 50px 40px;
    border-radius: 10px;
    ${constants.boxShadow};
  }

  .login-input {
    width: 200px;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    background-color: ${constants.colors.offWhite};
  }

  .login-button {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    background-color: ${constants.colors.annapurnaGreen};
    border: none;
    color: ${constants.colors.white};
    font-size: ${constants.fontSizes.defaultParagraph};
    font-weight: 600;
    cursor: pointer;
  }

  .credential-error {
    color: ${constants.colors.error};
    font-size: ${constants.fontSizes.defaultParagraph};
    font-weight: 700;
  }
`;
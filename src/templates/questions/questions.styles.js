import styled from "styled-components";
import constants from "../../utils/constants";

export const QuestionsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .set-questions-container, .get-questions-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    height: 500px;
    width: 600px;
    min-height: 500px;
    min-width: 600px;
    max-height: 500px;
    max-width: 600px;
    border-radius: 10px;
    background-color: ${constants.colors.white};
    ${constants.boxShadow};
    overflow: hidden;
  }

  .get-questions-container {
    justify-content: flex-start;
    gap: 20px;
    overflow: auto;
  }

  .question-input {
    width: 100%;
    height: 100px;
    resize: none;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: ${constants.colors.offWhite};
  }

  .question-option-input {
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: ${constants.colors.offWhite};
  }

  .add-question-button {
    width: 200px;
    height: 50px;
    background-color: ${constants.colors.annapurnaGreen};
    border: none;
    color: ${constants.colors.white};
    border-radius: 5px;
    cursor: pointer;
  }

  .question-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }

  .question-number {
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    background-color: ${constants.colors.annapurnaGreen};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${constants.colors.white};
    font-size: ${constants.fontSizes.defaultParagraph};
    font-weight: 600;
  }

  .question {
    font-size: ${constants.fontSizes.defaultParagraph};
    color: ${constants.colors.black};
    font-weight: 600;
  }
`;
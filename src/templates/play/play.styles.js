import styled from "styled-components";
import constants from "../../utils/constants";

export const PlayContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .play-wrapper {
    min-height: 450px;
    min-width: 800px;
    max-height: 500px;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    ${constants.boxShadow};
    padding: 30px;
    border-radius: 10px;
    background-color: ${constants.colors.white};
  }

  .options-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  .option-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .option-number {
    min-height: 30px;
    min-width: 30px;
    max-height: 30px;
    max-width: 30px;
    border-radius: 50%;
    background-color: ${constants.colors.annapurnaGreen};
    color: ${constants.colors.white};
    font-size: ${constants.fontSizes.defaultParagraph};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .next-question-button {
    height: 50px;
    width: 200px;
    border: none;
    border-radius: 5px;
    background-color: ${constants.colors.annapurnaGreen};
    color: ${constants.colors.white};
    font-size: ${constants.fontSizes.defaultParagraph};
    font-weight: 600;
    cursor: pointer;
  }
`;
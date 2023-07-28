import styled from "styled-components";
import constants from "../../utils/constants";

export const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  max-height: 100%;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .result-rapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 200px;
    max-height: 200px;
    height: 200px;
    gap: 30px;
  }

  .left-container {
    width: 100%;
    height: inherit;
    min-width: 600px;
    min-height: inherit;
    max-width: 100%;
    max-height: inherit;
    background-color: ${constants.colors.white};
    ${constants.boxShadow};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
  }

  .right-container {
    display: flex;
    width: 300px;
    height: inherit;
    min-width: 300px;
    min-height: inherit;
    max-width: 300px;
    max-height: inherit;
    background-color: ${constants.colors.white};
    ${constants.boxShadow};
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

  }

  .user-results-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 20px;
  }

  .user-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .result-time, .correct-answer, .winner-tag {
    color: ${constants.colors.annapurnaGreen}
  }

  .winner-avatar {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
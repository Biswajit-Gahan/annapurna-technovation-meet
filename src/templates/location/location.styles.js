import styled from "styled-components";
import constants from "../../utils/constants";

export const LocationContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .map-container, .user-container {
    min-height: 600px;
    background-color: ${constants.colors.white};
    max-height: 600px;
    height: 600px;
    ${constants.boxShadow};
    border-radius: 10px;
  }

  .map-container {
    min-width: 800px;
    max-width: 800px;
    width: 800px;
    overflow: auto;
  }

  .leaflet-container {
    height: 100%;
  }

  .leaflet-marker-icon {
    border-radius: 50%;
    border: 2px solid green;
  }

  .user-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    min-width: 300px;
    max-width: 300px;
    width: 300px;
    padding: 20px;
    gap: 20px;
    overflow: auto;
  }

  .user-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .user-avatar {
    max-width: 50px;
    max-height: 50px;
    min-width: 50px;
    min-height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .absent {
    color: ${constants.colors.annapurnaOrange};
  }

  .present {
    color: ${constants.colors.annapurnaGreen};
  }
`;
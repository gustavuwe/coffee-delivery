import styled from "styled-components";

export const ConfirmedOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.5rem;

  .text-container {
    h1 {
      font-size: 2rem;
      font-family: "Baloo 2", sans-serif;
      color: ${(props) => props.theme["yellow-dark"]};
      font-weight: bold;
    }

    p {
      font-size: 1.25rem;
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  .delivery-container {
    margin-top: 2rem;
    width: 526px;
    padding: 40px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border: 1px solid ${(props) => props.theme["base-button"]};

    .delivery-content-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

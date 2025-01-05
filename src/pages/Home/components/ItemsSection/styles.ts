import styled from "styled-components";

export const CardContainer = styled.div`

`;

export const CardItem = styled.div`
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 40px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .card-badge {
    padding: 0.125rem 0.25rem;
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 999px;

    p {
      font-size: 0.625rem;
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    max-width: 216px;
    text-align: center;
  }

  
`;
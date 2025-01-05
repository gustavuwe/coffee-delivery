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

  .card-price {
    font-family: "Baloo 2", sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};

    span {
      font-size: 1.5rem;
      font-weight: 900;
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .quantity-buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 72px;
    height: 38px;
    background-color: ${(props) => props.theme["base-button"]};
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    button {
      color: ${(props) => props.theme["purple"]};
      outline: none;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 300;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
        transition: all 0.2s ease-in-out;
      }
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ShopButton = styled.button`
  padding: 8px;
  background-color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  border: none;
  outline: none;
`;

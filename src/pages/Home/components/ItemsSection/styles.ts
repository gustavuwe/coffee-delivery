import styled from "styled-components";

export const CardItemsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 10rem auto 0 auto;
  z-index: 1;

  .section-title {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid: repeat(4, 22rem) / repeat(4, 18rem);
`;

export const CardItem = styled.div`
  position: relative;
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;

  .coffee-image {
    position: absolute;
    top: -20px;
  }

  .card-badges-container {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  }

  .card-badge {
    margin-top: 6rem; // 0.75rem
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 999px;

    p {
      font-size: 0.625rem;
      color: ${(props) => props.theme["yellow-dark"]};
      font-weight: 600;
    }
  }

  .card-texts {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

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
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  .quantity-buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 8px;
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

export const RightButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const ShopButton = styled.button`
  cursor: pointer;
  padding: 8px;
  background-color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
    transition: all 0.2s ease-in-out;
  }
`;

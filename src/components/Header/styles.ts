import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgba(250, 250, 250, 0.18);
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  z-index: 10;

  img {
    height: 5rem;
    width: 5rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .location-button {
      height: 38px;
      width: 143px;
      border-radius: 6px;
      background-color: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      font-size: 0.79rem;
      font-weight: 400;
      cursor: pointer;
      border: none;

      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;

      svg {
        margin-right: 0.5rem;
        color: ${(props) => props.theme["purple-dark"]};
      }

      &:hover {
        background-color: ${(props) => props.theme["purple"]};
        color: ${(props) => props.theme["white"]};

        svg {
          color: ${(props) => props.theme["white"]};
          fill: ${(props) => props.theme["white"]};
        }

        transition: all 0.3s ease-in-out;
      }
    }

    .cart-button {
      background-color: ${(props) => props.theme["yellow-light"]};
      transition: all 0.3s ease-in-out;
      width: 38px;
      height: 38px;
      border-radius: 6px;
      border: none;

      &:hover {
        background-color: ${(props) => props.theme["yellow"]};
        transition: all 0.3s ease-in-out;
        
        svg {
          fill: ${(props) => props.theme["white"]};
        }
      }

      svg {
        margin-right: 0.5rem;
        margin: 0 auto;
      }
    }
  }
`;

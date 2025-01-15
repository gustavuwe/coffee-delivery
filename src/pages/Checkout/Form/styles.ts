import styled from "styled-components";

export const CheckoutFormContainer = styled.section`
  height: calc(100vh - 6.5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 3rem;
`;

export const LeftForm = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  form {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
  }
`;

export const LeftFormTitle = styled.h1`
  font-size: 1.125rem;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 1rem;
`;

export const AdressText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .addressTextContainer {
    line-height: 1.5;

    h1 {
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 400;
    }

    p {
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["base-text"]};
      font-weight: 400;
    }
  }
`;

export const InputsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  input {
    background-color: ${(props) => props.theme["base-input"]};
    padding: 12px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
    margin: 0.4rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
    }
  }

  #cep-input {
    width: 33%;
  }
  #street-input {
    width: 100%;
  }

  .input-row-3 {
    display: flex;
    flex-direction: row;
    #number-input {
      width: 33%;
    }
    #complement-input {
      width: 67%;
    }
  }

  .input-row-4 {
    display: flex;
    flex-direction: row;
    #neighborhood-input {
      width: 35%;
    }
    #city-input {
      width: 54%;
    }
    #uf-input {
      width: 13%;
    }
  }
`;

export const PaymentContainer = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
`;

export const PaymentForm = styled.form`
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const PaymentHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  line-height: 1.5;

  h1 {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
    font-weight: 400;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Button = styled.button<{ isSelected: boolean }>`  
  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.isSelected ? props.theme["purple-light"] : props.theme["base-button"]}; 
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  border: ${(props) => props.isSelected ? `1px solid ${props.theme["purple-dark"]} ` : "1px solid transparent"};

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;

export const RightResume = styled.div`
  width: 448px;
  background-color: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  .item-separator {
    margin-top: 24px;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme["base-button"]};
    margin-bottom: 24px;
  }
`;

export const ItemContainer = styled.div`
  margin-left: 0.5rem;
`;

export const RightResumeTitle = styled.h1`
  font-size: 1.125rem;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 1rem;
`;

export const ResumeItem = styled.div`
  img {
    width: 4rem;
    height: 4rem;
  }

  h1 {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
  }

  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  .resumeItemButtonsContainer {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 2rem;

    button {
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme["base-button"]};
      cursor: pointer;
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      border: none;

      p {
        color: ${(props) => props.theme["base-text"]};
        font-size: 0.875rem;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
      }

      svg {
        color: ${(props) => props.theme["purple"]};
      }
    }

    .quantity-buttons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      background-color: ${(props) => props.theme["base-button"]};
      align-items: center;
      justify-content: center;
      border-radius: 6px;

      button {
        padding: 0.5rem;
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
  }

  .item-price {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
    font-weight: 400;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: bold;
  }

  .total-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .delivery-fee {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .total-price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  button {
    padding: 12px 8px;
    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow"]};
    cursor: pointer;
    border: none;

    p {
      color: ${(props) => props.theme["white"]};
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
    }
  }
`;

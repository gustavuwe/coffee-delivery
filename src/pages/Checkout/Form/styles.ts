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

  button {
    padding: 1rem;
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
  }
`;

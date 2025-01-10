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

  form {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 6px;

    input {
    }
  }
`;

export const LeftFormTitle = styled.h1`
  font-size: 1.125rem;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 1rem;
`;

export const AdressText = styled.div`
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

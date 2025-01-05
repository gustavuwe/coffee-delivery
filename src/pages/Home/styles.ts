import styled from "styled-components";

export const HomeContainer = styled.div`
  height: calc(100vh - 6.5rem); // 6.5rem = header height
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["background"]};
`;
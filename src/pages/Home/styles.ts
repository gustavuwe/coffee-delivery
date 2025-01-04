import styled from "styled-components";

export const HomeContainer = styled.div`
  height: calc(100vh - 6.5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.section`
  width: 100%;
  height: 100%;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`;

export const HeroSectionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;
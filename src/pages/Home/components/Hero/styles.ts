import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  height: 100%;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
`;

export const HeroSectionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  gap: 3rem;

  .hero-text {
    max-width: 588px;

    h1 {
      font-size: 3rem;
      font-family: "Baloo 2", sans-serif;
      color: ${(props) => props.theme["base-title"]};
      font-weight: 900;
      line-height: 3.5rem;
    }

    p {
      margin-top: 1rem;
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
    }
  }

  .advantages-items {
    margin-top: 3rem;
    display: grid;
    grid: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 0.5rem;
    line-height: 2.75rem;
    
  }

  .hero-image {
    z-index: 1;
    max-width: 476px;
    margin-bottom: 3rem;
  }
`;

const ADVANTAGE_ITEMS_COLORS = {
  yellowDark: 'yellow-dark',
  baseText: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const;

interface AdvantageItemsProps {
  advantageItemColor: keyof typeof ADVANTAGE_ITEMS_COLORS;
}

export const AdvantageItem = styled.div<AdvantageItemsProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: "";
  }

  .advantages-item-icon {
    width: 32px;
    height: 32px;
    border-radius: 999px;
    background-color: ${(props) => props.theme[ADVANTAGE_ITEMS_COLORS[props.advantageItemColor]]};
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

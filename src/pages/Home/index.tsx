import { Hero } from "./components/Hero";
import { ItemsSection } from "./components/ItemsSection";
import {
  HomeContainer,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <ItemsSection />
    </HomeContainer>
  );
}

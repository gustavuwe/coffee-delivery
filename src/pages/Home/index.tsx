import { HeroSection, HeroSectionContent, HomeContainer } from "./styles";
import background from "../../assets/background.png";
import heroImage from "../../assets/heroImage.svg";
import { ShoppingCart } from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <img src={background} alt="" className="bg-image"/>
        <HeroSectionContent>
          <div>
            <div className="hero-text">
              <h1>Econtre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquerh hora
              </p>
            </div>

            <div className="advantages-items">
              <div>
                <div className="advantages-item-icon">
                  <ShoppingCart size={24} color="#FFFFF" />
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <div className="advantages-item-icon">
                  <ShoppingCart size={24} color="#FFFFF" />
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <div className="advantages-item-icon">
                  <ShoppingCart size={24} color="#FFFFF" />
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <div className="advantages-item-icon">
                  <ShoppingCart size={24} color="#FFFFF" />
                </div>
                <p>Compra simples e segura</p>
              </div>
            </div>
          </div>
          <img src={heroImage} alt="" />
        </HeroSectionContent>
      </HeroSection>
    </HomeContainer>
  );
}

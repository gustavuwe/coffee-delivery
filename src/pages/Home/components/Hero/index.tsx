import background from "../../../../assets/background.png";
import heroImage from "../../../../assets/heroImage.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { AdvantageItem, HeroSection, HeroSectionContent } from "./styles";

export function Hero() {
  return (
    <HeroSection>
        <img src={background} alt="" className="bg-image" />
        <HeroSectionContent>
          <div className="hero-texts-container">
            <div className="hero-text">
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <div className="advantages-items">
              <AdvantageItem advantageItemColor="yellowDark">
                <div className="advantages-item-icon">
                  <ShoppingCart size={18} color="#FAFAFA" weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </AdvantageItem>
              <AdvantageItem advantageItemColor="baseText">
                <div className="advantages-item-icon">
                  <Package size={18} color="#FAFAFA" weight="fill" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </AdvantageItem>
              <AdvantageItem advantageItemColor="yellow">
                <div className="advantages-item-icon">
                  <Timer size={18} color="#FAFAFA" weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </AdvantageItem>
              <AdvantageItem advantageItemColor="purple">
                <div className="advantages-item-icon">
                  <Coffee size={18} color="#FAFAFA" weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </AdvantageItem>
            </div>
          </div>
          <img src={heroImage} alt="" className="hero-image" />
        </HeroSectionContent>
      </HeroSection>
  );
}
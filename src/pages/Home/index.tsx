import { Hero } from "./components/Hero";
import {
  HomeContainer,
} from "./styles";
import { ShoppingCart } from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <section>
        <h1>Nossos cafés</h1>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              {" "}
              {/* badge */}
              <p>Tradicional</p>
            </div>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <p>
                R$ <span>9,90</span>
              </p>
              <div>
                <div>
                  <button>+</button>
                  <p>1</p>
                  <button>-</button>
                </div>
                <div>
                  <button><ShoppingCart size={24} color="#FAFAFA" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
}

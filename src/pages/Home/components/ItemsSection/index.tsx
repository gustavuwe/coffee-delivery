import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CardContainer, CardFooter, CardItem, ShopButton } from "./styles";

type Coffee = {
  id: number;
  name: string;
  price: number;
};

const temporaryCoffees: Coffee[] = [
  { id: 1, name: "Expresso Tradicional", price: 9.9 },
]

const coffees: Coffee[] = [
  { id: 1, name: "Expresso Tradicional", price: 9.9 },
  { id: 2, name: "Expresso Americano", price: 9.9 },
  { id: 3, name: "Expresso Cremoso", price: 9.9 },
  { id: 4, name: "Expresso Gelado", price: 9.9 },
  { id: 5, name: "Café com Leite", price: 9.9 },
  { id: 6, name: "Latte", price: 9.9 },
  { id: 7, name: "Capuccino", price: 9.9 },
  { id: 8, name: "Macchiato", price: 9.9 },
  { id: 9, name: "Mocaccino", price: 9.9 },
  { id: 10, name: "Chocolate Quente", price: 9.9 },
  { id: 11, name: "Cubano", price: 9.9 },
  { id: 12, name: "Havaiano", price: 9.9 },
  { id: 13, name: "Árabe", price: 9.9 },
  { id: 14, name: "Irlandês", price: 9.9 },
];

export function ItemsSection() {
  return (
    <section>
      <h1>Nossos cafés</h1>
      <CardContainer>
        {temporaryCoffees.map(coffee => (
          <CardItem>
          <img src={`src/assets/Coffee${coffee.id}.png`} alt="Coffee Image" />
          <div className="card-badge">
            {/* badge */}
            <p className="card-badge">TRADICIONAL</p>
          </div>
          <h1>Expresso Tradicional</h1>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <CardFooter>
            <p className="card-price">
              R$ <span>9,90</span>
            </p>
            <div>
              <div className="quantity-buttons">
                <button><Plus size={16} /></button>
                <p>1</p>
                <button><Minus size={16} /></button>
              </div>
              <div>
                <ShopButton>
                  <ShoppingCart size={24} color="#FAFAFA" weight="fill" />
                </ShopButton>
              </div>
              </div>
            </CardFooter>
        </CardItem>
        ))}
      </CardContainer>
    </section>
  );
}
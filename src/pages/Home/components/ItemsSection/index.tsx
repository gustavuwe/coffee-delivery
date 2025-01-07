import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CardContainer,
  CardFooter,
  CardItem,
  CardItemsSection,
  RightButtonsContainer,
  ShopButton,
} from "./styles";
import { useState } from "react";

type Coffee = {
  id: number;
  name: string;
  description: string;
  badges: string[];
  price: number;
  quantity: number;
};

const initialCoffees: Coffee[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    badges: ["TRADICIONAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    badges: ["TRADICIONAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    badges: ["TRADICIONAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    badges: ["TRADICIONAL", "GELADO"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    badges: ["TRADICIONAL", "ALCOÓLICO", "GELADO"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    badges: ["ESPECIAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    badges: ["ESPECIAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    badges: ["ESPECIAL", "ALCOÓLICO"],
    price: 9.9,
    quantity: 0,
  },
];

export function ItemsSection() {
  const [coffees, setCoffees] = useState<Coffee[]>(initialCoffees);

  function addCoffeeSelected(coffee: Coffee) {
    const updatedCoffees = coffees.map((c) =>
      c.id === coffee.id ? { ...c, quantity: c.quantity + 1 } : c
    );

    setCoffees(updatedCoffees);
  }

  function removeCoffeeSelected(coffee: Coffee) {
    if (coffee.quantity > 0) {
      const updatedCoffees = coffees.map((c) =>
        c.id === coffee.id ? { ...c, quantity: c.quantity - 1 } : c
      );

      setCoffees(updatedCoffees);
    }
  }

  return (
    <CardItemsSection>
      <h1 className="section-title">Nossos cafés</h1>
      <CardContainer>
        {coffees.map((coffee) => (
          <CardItem>
            <img
              src={`src/assets/Coffee${coffee.id}.png`}
              alt="Coffee Image"
              className="coffee-image"
            />
            <div className="card-badges-container">
              {coffee.badges.map((badge) => (
                <div className="card-badge">
                  {/* badge */}
                  <p>{badge}</p>
                </div>
              ))}
            </div>
            <div className="card-texts">
              <h1>{coffee.name}</h1>
              <p>{coffee.description}</p>
            </div>
            <CardFooter>
              <p className="card-price">
                R$ <span>{coffee.price.toFixed(2)}</span>
              </p>
              <RightButtonsContainer>
                <div className="quantity-buttons">
                  <button onClick={() => addCoffeeSelected(coffee)}>
                    <Plus size={16} />
                  </button>
                  <p>{coffee.quantity}</p>
                  <button onClick={() => removeCoffeeSelected(coffee)}>
                    <Minus size={16} />
                  </button>
                </div>
                <div>
                  <ShopButton>
                    <ShoppingCart size={24} color="#FAFAFA" weight="fill" />
                  </ShopButton>
                </div>
              </RightButtonsContainer>
            </CardFooter>
          </CardItem>
        ))}
      </CardContainer>
    </CardItemsSection>
  );
}

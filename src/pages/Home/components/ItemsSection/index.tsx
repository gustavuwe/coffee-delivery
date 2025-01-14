import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CardContainer,
  CardFooter,
  CardItem,
  CardItemsSection,
  RightButtonsContainer,
  ShopButton,
} from "./styles";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";

export type Coffee = {
  id: number;
  name: string;
  description: string;
  badges: string[];
  price: number;
  quantity: number;
};

export function ItemsSection() {
  const { coffees } = useContext(CoffeesContext)

  // const [coffees, setCoffees] = useState<Coffee[]>(initialCoffees);

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
                <Link to="/checkout">
                  <ShopButton>
                    <ShoppingCart size={24} color="#FAFAFA" weight="fill" />
                  </ShopButton>
                  </Link>
                </div>
              </RightButtonsContainer>
            </CardFooter>
          </CardItem>
        ))}
      </CardContainer>
    </CardItemsSection>
  );
}

import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { Link } from "react-router-dom";

export function Header() {
  const { totalCoffeesSelected } = useContext(CoffeesContext);

  return (
    <HeaderContainer>
      <Link to="/home">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <button className="location-button">
          <MapPin size={24} color="purple" weight="fill" />
          Porto Alegre, RS
        </button>
        <Link to="/checkout">
          <button className="cart-button">
            <ShoppingCart size={24} color="#C47F17" weight="fill" />
            {totalCoffeesSelected > 0 ? (
              <div className="cart-items-quantity">
                <p>{totalCoffeesSelected}</p>
              </div>
            ) : null}
          </button>
        </Link>
      </nav>
    </HeaderContainer>
  );
}

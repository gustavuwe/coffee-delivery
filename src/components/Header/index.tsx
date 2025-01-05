import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { HeaderContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <button className="location-button"><MapPin size={24} color="purple" weight="fill" />Porto Alegre, RS</button>
        <button className="cart-button">
        <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </button>
      </nav>
    </HeaderContainer>
  )
}
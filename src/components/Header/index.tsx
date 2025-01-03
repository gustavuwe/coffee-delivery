import logo from "../../assets/logo.svg"
import { ShoppingCart } from "phosphor-react"

export function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <nav>
        <button>Porto Alegre, RS</button>
        <button>
        <ShoppingCart size={24} />
        </button>
      </nav>
    </header>
  )
}
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import {
  AdressText,
  Button,
  ButtonsContainer,
  CheckoutFormContainer,
  InputsContainer,
  ItemContainer,
  LeftForm,
  LeftFormTitle,
  PaymentContainer,
  PaymentForm,
  PaymentHeader,
  ResumeItem,
  RightResume,
  RightResumeTitle,
  Summary,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeesContext, type Coffee } from "../../../contexts/CoffeesContext";
import { NoCoffeeSelectedContainer } from "../../../components/Header/styles";

type buttonsToSelect = "money" | "credit-card" | "debit-card" | null;

export function CheckoutForm() {
  const { coffees, totalCoffeesSelected } = useContext(CoffeesContext);

  const [coffeesSelected, setCoffeesSelected] = useState<Coffee[]>([]);

  const [selectedButton, setSelectedbutton] = useState<buttonsToSelect>(null)

  useEffect(() => {
    const CoffeesSelected = coffees.filter(
      (coffee: Coffee) => coffee.quantity > 0
    );
    setCoffeesSelected(CoffeesSelected);
  }, [coffees]);

  return (
    <>
      {totalCoffeesSelected > 0 ? (
        <CheckoutFormContainer>
        <LeftForm>
          <div>
            <LeftFormTitle>Complete seu Pedido</LeftFormTitle>
            <form>
              <AdressText>
                <MapPinLine size={24} />
                <div className="addressTextContainer">
                  <h1>Endereço de entrega</h1>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </AdressText>

              <InputsContainer>
                <input type="text" placeholder="CEP" id="cep-input" />
                <input type="text" placeholder="Rua" id="street-input" />
                <div className="input-row-3">
                  <input type="text" placeholder="Número" id="number-input" />
                  <input
                    type="text"
                    placeholder="Complemento"
                    id="complement-input"
                  />
                </div>
                <div className="input-row-4">
                  <input
                    type="text"
                    placeholder="Bairro"
                    id="neighborhood-input"
                  />
                  <input type="text" placeholder="Cidade" id="city-input" />
                  <input type="text" placeholder="UF" id="uf-input" />
                </div>
              </InputsContainer>
            </form>
          </div>

          <PaymentContainer>
            <PaymentForm>
              <PaymentHeader>
                <CurrencyDollar size={24} />
                <div>
                  <h1>Pagamento</h1>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </PaymentHeader>

              <ButtonsContainer>
                <Button isSelected={selectedButton === "credit-card"} onClick={(e) => {
                  e.preventDefault();
                  setSelectedbutton("credit-card")
                }}>
                  <CreditCard size={18} />
                  <p>CARTÃO DE CRÉDITO</p>
                </Button>
                <Button isSelected={selectedButton === "debit-card"} onClick={(e) => {
                  e.preventDefault();
                  setSelectedbutton("debit-card")
                }}>
                  <Bank size={18} />
                  <p>CARTÃO DE DÉBITO</p>
                </Button>
                <Button isSelected={selectedButton === "money"} onClick={(e) => {
                  e.preventDefault();
                  setSelectedbutton("money")
                }}>
                  <Money size={18} />
                  <p>DINHEIRO</p>
                </Button>
              </ButtonsContainer>
            </PaymentForm>
          </PaymentContainer>
        </LeftForm>

        <div>
          <RightResumeTitle>Cafés selecionados</RightResumeTitle>
          <RightResume>
            <div>
              {coffeesSelected.map((coffee: Coffee) => {
                return (
                  <>
                    <ResumeItem>
                      <img
                        src={`src/assets/Coffee${coffee.id}.png`}
                        alt="Coffee Image"
                      />
                      <ItemContainer>
                        <h1>{coffee.name}</h1>
                        <div className="resumeItemButtonsContainer">
                          <div className="quantity-buttons">
                            <button /* onClick={ () => addCoffeeSelected(coffee)} */
                            >
                              <Plus size={16} />
                            </button>
                            <p>{coffee.quantity}</p>
                            <button /* onClick={() => removeCoffeeSelected(coffee)} */
                            >
                              <Minus size={16} />
                            </button>
                          </div>
                          <button>
                            <Trash /> <p>REMOVER</p>
                          </button>
                        </div>
                      </ItemContainer>
                      <p className="item-price">R$ {coffee.price.toFixed(2)}</p>
                    </ResumeItem>
                    <div className="item-separator"></div>
                  </>
                );
              })}
            </div>
            <Summary>
              <div className="total-items">
                <p>Total de Itens</p>
                <p>
                  R${" "}
                  {coffeesSelected
                    .reduce((total, coffee) => total + coffee.price, 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="delivery-fee">
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div className="total-price">
                <h1>Total</h1>
                <h1>
                  R${" "}
                  {coffeesSelected
                    .reduce((total, coffee) => total + coffee.price, 3.5)
                    .toFixed(2)}
                </h1>
              </div>
              <button>
                <p>CONFIRMAR PEDIDO</p>
              </button>
            </Summary>
          </RightResume>
        </div>
      </CheckoutFormContainer>
      ) : (
        <NoCoffeeSelectedContainer>
          <img src="src/assets/no-coffee-selected.png" alt="" />
          <h1>Opa! Parece que você ainda não selecionou nenhum café</h1>
        </NoCoffeeSelectedContainer>
      )}
    </>
  );
}

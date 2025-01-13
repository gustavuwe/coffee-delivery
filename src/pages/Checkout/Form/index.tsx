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

export function CheckoutForm() {
  return (
    <>
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
                <button>
                  <CreditCard size={18} />
                  <p>CARTÃO DE CRÉDITO</p>
                </button>
                <button>
                  <Bank size={18} />
                  <p>CARTÃO DE DÉBITO</p>
                </button>
                <button>
                  <Money size={18} />
                  <p>DINHEIRO</p>
                </button>
              </ButtonsContainer>
            </PaymentForm>
          </PaymentContainer>
        </LeftForm>

        <div>
          <RightResumeTitle>Cafés selecionados</RightResumeTitle>
          <RightResume>
            <div>
              <ResumeItem>
                <img src="src/assets/Coffee1.png" alt="Coffee Image" />
                <ItemContainer>
                  <h1>Expresso Tradicional</h1>
                  <div className="resumeItemButtonsContainer">
                    <div className="quantity-buttons">
                      <button /* onClick={ () => addCoffeeSelected(coffee)} */>
                        <Plus size={16} />
                      </button>
                      <p>0</p>
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
                <p>R$9,90</p>
              </ResumeItem>
              <div className="item-separator"></div>
            </div>
            <Summary>
              <div className="total-items">
                <p>Total de Itens</p>
                <p>R$ 29,70</p>
              </div>
              <div className="delivery-fee">
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div className="total-price">
                <h1>Total</h1>
                <h1>R$ 33,20</h1>
              </div>
              <button><p>CONFIRMAR PEDIDO</p></button>
            </Summary>
          </RightResume>
        </div>
      </CheckoutFormContainer>
    </>
  );
}

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  AdressText,
  ButtonsContainer,
  CheckoutFormContainer,
  InputsContainer,
  LeftForm,
  LeftFormTitle,
  PaymentContainer,
  PaymentForm,
  PaymentHeader,
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
          Cafés selecionados
          <div>
            <div>
              <h1>Expresso Tradicional</h1>
              <div>
                <button>- 1 +</button>
                <button>Remover</button>
              </div>
            </div>
            <div>
              <p>R$ 9,90</p>
            </div>
          </div>
          <div>
            <div>
              <p>Total de Itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <h1>Total</h1>
              <h1>R$ 33,20</h1>
            </div>
            <button>CONFIRMAR PEDIDO</button>
          </div>
        </div>
      </CheckoutFormContainer>
    </>
  );
}

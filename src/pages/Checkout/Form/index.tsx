export function CheckoutForm() {
  return (
    <>
      <div>
        <div>
          <h1>Complete seu Pedido</h1>
          <form>
            <h1>Endereço de entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </form>
        </div>

        <div>
          <form>
            <h1>Pagamento</h1>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>

            <div>
              <button>CARTÃO DE CRÉDITO</button>
              <button>CARTÃO DE DÉBITO</button>
              <button>DINHEIRO</button>
            </div>
          </form>
        </div>
      </div>
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
    </>
  );
}

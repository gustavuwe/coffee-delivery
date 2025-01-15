import { ConfirmedOrderContainer } from "./styles";

export function ConfirmedOrder() {
  return (
    <ConfirmedOrderContainer>
      <div>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div>
          <div>
            <div>
              <img src="src/assets/coffee-delivery.png" alt="" />
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfirmedOrderContainer>
  );
}

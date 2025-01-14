import type { Coffee } from "../../pages/Home/components/ItemsSection";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  UPDATE_COFFEE_QUANTITY = "UPDATE_COFFEE_QUANTITY",
}

export function addNewCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    }
  }
}

export function updateCoffeeQuantityAction(coffee: Coffee) {
  return {
    type: ActionTypes.UPDATE_COFFEE_QUANTITY,
    payload: {
      coffee,
    },
  }
}
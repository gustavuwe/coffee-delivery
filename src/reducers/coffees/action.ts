import type { Coffee } from "../../pages/Home/components/ItemsSection";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
}

export function addNewCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    }
  }
}
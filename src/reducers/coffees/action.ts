import type { addNewCoffeeData, removeCoffeeData } from "../../contexts/CoffeesContext";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  UPDATE_COFFEE_QUANTITY = "UPDATE_COFFEE_QUANTITY",
  REMOVE_COFFEE_QUANTITY = "REMOVE_COFFEE_QUANTITY",

}

export function addNewCoffeeAction(data: addNewCoffeeData) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      data,
    }
  }
}

export function removeCoffeeAction(data: removeCoffeeData) {
  return {
    type: ActionTypes.REMOVE_COFFEE_QUANTITY,
    payload: {
      data,
    }
  }
}
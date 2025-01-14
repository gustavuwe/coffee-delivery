import { ActionTypes } from "./action";

export type Coffee = {
  id: number;
  name: string;
  description: string;
  badges: string[];
  price: number;
  quantity: number;
};

export interface CoffeesState {
  coffees: Coffee[];
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const { coffee } = action.payload;

      const updatedCoffees = state.coffees.map((c) =>
        c.id === coffee.id ? { ...c, quantity: c.quantity + 1 } : c
      );

      return {
        ...state,
        coffees: updatedCoffees,
      };
    }

    case ActionTypes.UPDATE_COFFEE_QUANTITY: {
      const { coffee } = action.payload;
      
      const updatedCoffees = state.coffees.map((c) => {
        if (c.id === coffee.id) {
          return { ...c, quantity: c.quantity + 1 };
        }
        return c;
      });

      return {
        ...state,
        coffees: updatedCoffees,
      };
    }
    default: 
    return state;
  }
}

import { ActionTypes } from "./action";

export type Coffee = {
  id: number;
  name: string;
  description: string;
  badges: string[];
  price: number;
  quantity: number;
};

interface CoffeesState {
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
  }
}

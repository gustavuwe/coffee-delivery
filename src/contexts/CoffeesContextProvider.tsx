// import { createContext, useReducer, type ReactNode } from "react";
// import { coffeesReducer } from "../reducers/coffees/reducer";
// import {
//   addNewCoffeeAction,
//   removeCoffeeAction,
// } from "../reducers/coffees/action";

// export interface addNewCoffeeData {
//   id: number;
// }

// export interface removeCoffeeData {
//   id: number;
// }

// type Coffee = {
//   id: number;
//   name: string;
//   description: string;
//   badges: string[];
//   price: number;
//   quantity: number;
// };

// // interface CoffeesState {
// //   coffees: Coffee[];
// // }

// const initialCoffees: Coffee[] = [
//   {
//     id: 1,
//     name: "Expresso Tradicional",
//     description: "O tradicional café feito com água quente e grãos moídos",
//     badges: ["TRADICIONAL"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 2,
//     name: "Expresso Americano",
//     description: "Expresso diluído, menos intenso que o tradicional",
//     badges: ["TRADICIONAL"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 3,
//     name: "Expresso Cremoso",
//     description: "Café expresso tradicional com espuma cremosa",
//     badges: ["TRADICIONAL"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 4,
//     name: "Expresso Gelado",
//     description: "Bebida preparada com café expresso e cubos de gelo",
//     badges: ["TRADICIONAL", "GELADO"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 5,
//     name: "Café com Leite",
//     description: "Meio a meio de expresso tradicional com leite vaporizado",
//     badges: ["TRADICIONAL", "COM LEITE"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 6,
//     name: "Latte",
//     description:
//       "Uma dose de café expresso com o dobro de leite e espuma cremosa",
//     badges: ["TRADICIONAL", "COM LEITE"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 7,
//     name: "Capuccino",
//     description:
//       "Bebida com canela feita de doses iguais de café, leite e espuma",
//     badges: ["TRADICIONAL", "COM LEITE"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 8,
//     name: "Macchiato",
//     description:
//       "Café expresso misturado com um pouco de leite quente e espuma",
//     badges: ["TRADICIONAL", "COM LEITE"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 9,
//     name: "Mocaccino",
//     description: "Café expresso com calda de chocolate, pouco leite e espuma",
//     badges: ["TRADICIONAL", "COM LEITE"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 10,
//     name: "Chocolate Quente",
//     description: "Bebida feita com chocolate dissolvido no leite quente e café",
//     badges: ["TRADICIONAL", "COM LEITE"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 11,
//     name: "Cubano",
//     description:
//       "Drink gelado de café expresso com rum, creme de leite e hortelã",
//     badges: ["TRADICIONAL", "ALCOÓLICO", "GELADO"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 12,
//     name: "Havaiano",
//     description: "Bebida adocicada preparada com café e leite de coco",
//     badges: ["ESPECIAL"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 13,
//     name: "Árabe",
//     description: "Bebida preparada com grãos de café árabe e especiarias",
//     badges: ["ESPECIAL"],
//     price: 9.9,
//     quantity: 0,
//   },
//   {
//     id: 14,
//     name: "Irlandês",
//     description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
//     badges: ["ESPECIAL", "ALCOÓLICO"],
//     price: 9.9,
//     quantity: 0,
//   },
// ];

// // const initialState: CoffeesState = {
// //   coffees: initialCoffees,
// // }

// interface CoffeesContextType {
//   // state: CoffeesState;
//   // dispatch: Dispatch<ActionTypes>;
//   coffees: Coffee[];
//   addNewCoffee: (data: addNewCoffeeData) => void;
//   removeCoffee: (data: removeCoffeeData) => void;
// }

// export const CoffeesContext = createContext({} as CoffeesContextType);

// interface CoffeesContextProviderProps {
//   children: ReactNode;
// }

// export function CoffeesContextProvider({
//   children,
// }: CoffeesContextProviderProps) {
//   const [coffeeState, dispatch] = useReducer(coffeesReducer, {
//     coffees: initialCoffees,
//   });

//   function addNewCoffee(data: addNewCoffeeData) {
//     dispatch(addNewCoffee(data));
//   }

//   function removeCoffee(data: removeCoffeeData) {
//     dispatch(removeCoffee(data));
//   }

//   return (
//     <CoffeesContext.Provider
//       value={{ coffees: initialCoffees, addNewCoffee, removeCoffee }}
//     >
//       {children}
//     </CoffeesContext.Provider>
//   );
// }

import { useReducer, type ReactNode } from "react";
import { coffeesReducer } from "../reducers/coffees/reducer";
import {
  addNewCoffeeAction,
  removeCoffeeAction,
} from "../reducers/coffees/action";
import { CoffeesContext, Coffee, addNewCoffeeData, removeCoffeeData } from "./CoffeesContext";

const initialCoffees: Coffee[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    badges: ["TRADICIONAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    badges: ["TRADICIONAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    badges: ["TRADICIONAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    badges: ["TRADICIONAL", "GELADO"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    badges: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    badges: ["TRADICIONAL", "ALCOÓLICO", "GELADO"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    badges: ["ESPECIAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    badges: ["ESPECIAL"],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    badges: ["ESPECIAL", "ALCOÓLICO"],
    price: 9.9,
    quantity: 0,
  },
];

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(coffeesReducer, {
    coffees: initialCoffees,
  });

  function addNewCoffee(data: addNewCoffeeData) {
    dispatch(addNewCoffeeAction(data));
  }

  function removeCoffee(data: removeCoffeeData) {
    dispatch(removeCoffeeAction(data));
  }

  const totalCoffeesSelected = coffeeState.coffees.reduce(
    (total, coffee) => total + coffee.quantity,
    0
  );

  return (
    <CoffeesContext.Provider
      value={{ coffees: coffeeState.coffees, addNewCoffee, removeCoffee, totalCoffeesSelected }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
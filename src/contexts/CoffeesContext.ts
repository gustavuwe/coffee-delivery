import { createContext } from "react";

export type Coffee = {
  id: number;
  name: string;
  description: string;
  badges: string[];
  price: number;
  quantity: number;
};

export interface addNewCoffeeData {
  id: number;
}

export interface removeCoffeeData {
  id: number;
}

interface CoffeesContextType {
  coffees: Coffee[];
  addNewCoffee: (data: addNewCoffeeData) => void;
  removeCoffee: (data: removeCoffeeData) => void;
  totalCoffeesSelected: number;
}

export const CoffeesContext = createContext({} as CoffeesContextType);
import { createContext } from "react";
import type { CheckoutFormData } from "../pages/Checkout/Form";

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
  totalCoffeesSelected: number;
  orderData: CheckoutFormData;
  addNewCoffee: (data: addNewCoffeeData) => void;
  removeCoffee: (data: removeCoffeeData) => void;
  SetOrderData: (data: CheckoutFormData) => void;
}

export const CoffeesContext = createContext({} as CoffeesContextType);
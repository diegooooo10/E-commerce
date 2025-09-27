import type { Cart, History } from "../models";

export type HistoryStructure = {
  history: History[];
  removeHistoryItem: (id: string) => void;
  addPurchase: (cart: Cart) => void;
};

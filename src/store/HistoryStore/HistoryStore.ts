import { create } from "zustand";
import type { HistoryStructure } from "../../types";
import { HISTORY_KEY, initialHistory } from "../../constants";
import type { History, Cart } from "../../models";
import { saveToLocalstorage } from "../../utils";

export const useHistoryStore = create<HistoryStructure>((set, get) => ({
  history: initialHistory,

  removeHistoryItem: (id: string) => {
    const history = get().history;
    const newHistory = history.filter((h) => h.id !== id);

    saveToLocalstorage<History[]>(newHistory, HISTORY_KEY);
    return set(() => ({ history: newHistory }));
  },

  addPurchase: (cart: Cart) => {
    const history = get().history;
    const newHistory = [
      ...history,
      { cart, date: new Date(), id: crypto.randomUUID() },
    ];

    saveToLocalstorage<History[]>(newHistory, HISTORY_KEY);
    return set(() => ({
      history: newHistory,
    }));
  },
}));

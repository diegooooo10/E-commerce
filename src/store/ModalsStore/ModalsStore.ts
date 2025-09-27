import { create } from "zustand";
import type { ModalStructure } from "../../types";

export const useModalsStore = create<ModalStructure>((set, get) => ({
  isOpenNavbar: false,
  modal: "",

  setIsOpenNavbar: (isOpen?: boolean) => {
    const newOpen = isOpen !== undefined ? isOpen : !get().isOpenNavbar;
    return set(() => ({ isOpenNavbar: newOpen }));
  },
  
  setModal: (modal) => set(() => ({ modal })),
}));

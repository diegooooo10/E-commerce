type ModalType = "checkout" | "";

export type ModalStructure = {
  isOpenNavbar: boolean;
  modal: ModalType;
  setIsOpenNavbar: (isOpen?: boolean) => void;
  setModal: (modal: ModalType) => void;
};

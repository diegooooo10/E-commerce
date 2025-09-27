import { useCallback, useEffect, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { useModalsStore } from "../../store";
import { IconClose } from "../Icons";

const Modal = ({ children }: PropsWithChildren) => {
  const { modal, setModal } = useModalsStore();
  const modalRoot = document.getElementById("modal");
  const closeModal = useCallback(() => {
    setModal("");
  }, [setModal]);
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (modal !== "") {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal, modal]);

  if (modal === "" || !modalRoot) return null;

  return createPortal(
    <div
      className="fixed z-[999] inset-0 bg-background/70 dark:bg-background-dark/70 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="relative card flex flex-col pt-2 px-2 md:min-w-1/4 w-full md:w-auto min-h-[300px]"
        onClick={handleContentClick}
      >
        <button
          onClick={closeModal}
          className="cursor-pointer absolute right-2 top-2"
          aria-label="close modal"
        >
          <IconClose />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
export default Modal;

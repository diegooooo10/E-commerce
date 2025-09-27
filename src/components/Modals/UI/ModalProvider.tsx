import { lazy, Suspense } from "react";
import { useModalsStore } from "../../../store";
import { CircleLoader } from "../../Loaders";
import Modal from "../Modal";

const Checkout = lazy(() => import("../../Forms/CheckoutForm"));

const ModalProvider = () => {
  const modal = useModalsStore((state) => state.modal);
  return (
    <Suspense fallback={<CircleLoader />}>
      <Modal>{modal === "checkout" && <Checkout />}</Modal>
    </Suspense>
  );
};
export default ModalProvider;

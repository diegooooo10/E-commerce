import { useForm, type SubmitHandler } from "react-hook-form";
import { InputForm, SelectForm } from "../Common";
import { zodResolver } from "@hookform/resolvers/zod";
import { payTypes } from "../../constants";
import { useCartStore, useHistoryStore, useModalsStore } from "../../store";
import {
  checkoutSchema,
  loadCheckoutSchema,
  type checkoutSchemaType,
  type checkoutValues,
} from "../../schema";
import { useEffect, useState } from "react";

const CheckoutForm = () => {
  const buy = useCartStore((state) => state.buy);
  const cart = useCartStore((state) => state.cart);
  const setModal = useModalsStore((state) => state.setModal);
  const addPurchase = useHistoryStore((state) => state.addPurchase);
  const [schema, setSchema] = useState<checkoutSchemaType | null>(null);

  useEffect(() => {
    loadCheckoutSchema().then((schema: checkoutSchemaType) =>
      setSchema(schema)
    );
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<checkoutValues>({
    resolver: schema ? zodResolver(checkoutSchema) : undefined,
    mode: "onBlur",
    defaultValues: {
      numberCard: "",
      address: "",
      phone: "",
      typePay: "",
    },
  });
  const onSubmit: SubmitHandler<checkoutValues> = () => {
    buy();
    addPurchase(cart);
    reset();
    setModal("");
  };
  
  if (!schema) return <p>Loading form...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-4">
      <h2 className="text-center font-bold text-xl mb-4">Checkout Form</h2>

      <section className="flex flex-col mb-4 gap-5">
        <div className="flex md:flex-row flex-col gap-5">
          <InputForm
            control={control}
            id="numberCard"
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            error={errors.numberCard}
            type="text"
          />
          <InputForm
            control={control}
            id="phone"
            label="Phone Number"
            placeholder="5551234567"
            error={errors.phone}
            type="text"
          />
        </div>
        <InputForm
          control={control}
          id="address"
          label="Address"
          placeholder="123 Main St"
          error={errors.address}
          type="text"
        />
        <SelectForm
          options={payTypes}
          control={control}
          id="typePay"
          label="Payment Type"
          error={errors.typePay}
        />
      </section>

      <button className="accent-component button">Pay Now</button>
    </form>
  );
};
export default CheckoutForm;

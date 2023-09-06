import React, { useId } from "react";
import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";

export default function InputBox({ label }) {
  const uniqueId = useId();

  return (
    <div className="shadow- my-1 flex w-full justify-between rounded-md bg-white p-3 ">
      {/* input amount */}
      <AmountInput label={label} uniqueId={uniqueId} />

      {/* select currency type */}
      <CurrencySelect uniqueId={uniqueId} />
    </div>
  );
}

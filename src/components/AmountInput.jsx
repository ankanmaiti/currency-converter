import { useState } from "react";

export default function AmountInput({ label, uniqueId }) {
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={`${uniqueId}-amount`}
          className="mb-1 text-sm capitalize text-slate-500"
        >
          {label}
        </label>

        {/* input amount field */}
        <input
          type="number"
          id={`${uniqueId}-amount`}
          className="rounded-md py-1 text-black outline-none"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </>
  );
}

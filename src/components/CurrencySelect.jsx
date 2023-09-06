import { useState } from "react";

export default function CurrencySelect({ uniqueId }) {
  const [currencyType, setCurrencyType] = useState("inr");

  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={`${uniqueId}-currency-type`}
          className="mb-1 text-end text-sm text-slate-500"
        >
          Currency Type
        </label>

        {/* select currency field */}
        <select
          id={`${uniqueId}-currency-type`}
          className=" rounded-md bg-pink-200 px-2 py-1 font-semibold lowercase text-black outline-none"
          value={currencyType}
          onChange={(e) => setCurrencyType(e.target.value)}
        >
          <option value="Inr">India</option>
          <option value="Usa">USA</option>
        </select>
      </div>
    </>
  );
}

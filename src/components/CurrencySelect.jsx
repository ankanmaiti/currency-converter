import cn from "../utils/tailwindcss";

export default function CurrencySelect({ uniqueId, className }) {

  return (
    <>
      <select id={`${uniqueId}-selector`} className={cn(
        "rounded-md border border-gray-300 bg-white px-2 py-1 focus:outline-none",
        className
      )}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
    </>
  );
}

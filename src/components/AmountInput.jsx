import cn from "../utils/tailwindcss";

export default function AmountInput({ label, uniqueId, className, ...props }) {

  return (
    <>
      <div className="mb-4 flex flex-col space-y-1">
        <label for={`${uniqueId}-amount`} className="mr-2">{ label }</label>
        <input
          type="number"
          id={`${uniqueId}-amount`}
          className={ cn("rounded-md border border-gray-300 px-2 py-1 focus:outline-none", className) }
          {...props}
        />
      </div>
    </>
  );
}

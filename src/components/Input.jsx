import cn from "../utils/tailwindcss";

export default function Input({ pattern = "", placeholder = "", type = "text", label, uniqueId, className, ...props }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={`${uniqueId}-amount`} className="mr-2">{label}</label>      
      <input
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        id={`${uniqueId}-amount`}
        className={cn(
          "w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}

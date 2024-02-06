import cn from "../../utils/tailwindcss";

export default function Input({
  placeholder = "",
  type = "text",
  label,
  id,
  className,
  value,
  onChange
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={`${id}-amount`} className="mr-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={`${id}-amount`}
        className={cn(
          "w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none",
          className,
        )}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

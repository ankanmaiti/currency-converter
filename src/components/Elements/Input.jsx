import cn from "@utils/tailwindcss";
import { useId } from "react";

export default function Input({
  label,
  className,
  value,
  onChange,
  placeholder = "",
  disabled = false,
  type = "text",
}) {
  const id = useId()
  return (

    <div className={cn("flex flex-col space-y-[.15rem] text-blue-600", className)}>
      {!!label && <label htmlFor={id} >{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={cn(
          "w-full uppercase rounded-md border border-blue-300 px-2 py-1 outline-none",
          disabled && "cursor-not-allowed text-red-400 border-none bg-blue-100/80",
          disabled && value && "cursor-default bg-blue-100/60"
        )}
        value={value}
        onChange={onChange}
        spellCheck="false"
        disabled={disabled}
      />
    </div>
  );
}

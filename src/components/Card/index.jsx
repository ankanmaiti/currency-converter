import cn from "../../utils/tailwindcss";

export default function Card({ className, children }) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg", className)}>
      {children}
    </div>
  )
}

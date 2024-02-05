import { AiOutlineSwap } from "react-icons/ai";
import cn from "../../utils/tailwindcss";

export default function SwapIcon({className}) {
  return (
    <AiOutlineSwap className={cn("text-xl", className)} />
  )
}

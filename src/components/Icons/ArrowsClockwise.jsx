import { PiArrowsClockwise } from "react-icons/pi";
import cn from "../../utils/tailwindcss";

export default function ArrowsClockwise({className}) {
  return (
  <PiArrowsClockwise className={cn('text-xl', className)} />
  )
}

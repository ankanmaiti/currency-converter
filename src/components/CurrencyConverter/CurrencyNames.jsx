import { useId } from "react";

import SwapIcon from "../Icons/SwapIcon";
import ArrowsClockwise from "../Icons/ArrowsClockwise";

import Input from "../Elements/Input";
import Button from '../Elements/Button'

export default function CurrencyNames() {
  const id = useId()

  return (
    <>

      <div className="flex" >
        <Input placeholder="From" id={`${id}-from`} />
        <Button className={"px-4 hover:text-blue-700 border-none transition-colors delay-75"}><SwapIcon /></Button>
        <Input placeholder="To" id={`${id}-to`} />
      </div>

      <Button
        className={"w-full space-x-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"}
      >
        <ArrowsClockwise />
        <span>Proceed</span>
      </Button>

    </>
  )
}

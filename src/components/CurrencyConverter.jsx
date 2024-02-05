import { useId } from "react";
import AmountInput from "./AmountInput";
import CurrencySelect from './CurrencySelect'
import Button from './Button'
import SwapIcon from "./Icons/SwapIcon";

export default function CurrencyConverter() {
  const uniqueId = useId()
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg">
        <div className="text-left mb-6 w-full">
          <h2 className="text-2xl font-bold">Currency Converter</h2>
          <p className="text-sm text-gray-400">Convert your currency in real-time</p>
        </div>


        <div className="space-y-5" >

          <AmountInput uniqueId={uniqueId} label={'Amount'} />

          <div className="flex w-full justify-between" >
            <CurrencySelect className="w-4/12" uniqueId={`${uniqueId}-from`} />
            <Button className={"hover:text-blue-700 border-none transition-colors delay-75"}><SwapIcon /></Button>
            <CurrencySelect className="w-4/12" uniqueId={`${uniqueId}-to`} />
          </div>

          <Button className={"w-full bg-black px-6 text-white transition-colors delay-75 hover:border hover:border-black hover:bg-white hover:text-black"} >Convert</Button>

          <div className="flex flex-col space-y-1">
            <AmountInput label={'Result'} uniqueId={`${uniqueId}-to`} className={"cursor-not-allowed"} disabled />
          </div>

        </div>
      </div>
    </>
  );
}

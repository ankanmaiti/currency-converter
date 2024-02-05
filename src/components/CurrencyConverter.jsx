import { useId } from "react";

import AmountInput from "./AmountInput";
import CurrencySelect from './CurrencySelect'
import Button from './Button'

import SwapIcon from "./Icons/SwapIcon";
import ArrowsClockwise from "./Icons/ArrowsClockwise";

import Card from "./Card";
import CardHeader from "./Card/CardHeader";
import CardFooter from "./Card/CardFooter";
import CardBody from "./Card/CardBody";

export default function CurrencyConverter() {
  const uniqueId = useId()
  return (
    <>
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader>
          <h2 className="text-2xl font-bold">Currency Converter</h2>
          <p className="text-sm text-gray-400">Convert your currency in real-time</p>
        </CardHeader>


        <CardBody className="space-y-5" >

          <AmountInput uniqueId={uniqueId} label={'Amount'} />

          <div className="flex w-full justify-between" >
            <CurrencySelect className="w-5/12" uniqueId={`${uniqueId}-from`} />
            <Button className={"px-4 hover:text-blue-700 border-none transition-colors delay-75"}><SwapIcon /></Button>
            <CurrencySelect className="w-5/12" uniqueId={`${uniqueId}-to`} />
          </div>

          <Button className={"w-full space-x-1 bg-black px-6 text-white transition-colors delay-75 hover:border hover:border-black hover:bg-white hover:text-black"} >
            <ArrowsClockwise  /> {/* use animate-spin for roatation/loading */}
            <span>Convert</span>
          </Button>

          <div className="flex flex-col space-y-1">
            <AmountInput label={'Result'} uniqueId={`${uniqueId}-to`} className={"cursor-not-allowed"} disabled />
          </div>

        </CardBody>

        <CardFooter>
        </CardFooter>
      </Card>
    </>
  );
}

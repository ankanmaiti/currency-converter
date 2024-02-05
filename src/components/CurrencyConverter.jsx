import { useId } from "react";

import SwapIcon from "./Icons/SwapIcon";
import ArrowsClockwise from "./Icons/ArrowsClockwise";

import Card from "./Card";
import CardHeader from "./Card/CardHeader";
import CardFooter from "./Card/CardFooter";
import CardBody from "./Card/CardBody";

import Input from "./Input";
import Button from './Button'


export default function CurrencyConverter() {
  const uniqueId = useId()
  return (
    <>
      <Card className="border-t-4 border-t-blue-600 md:max-w-md">
        <CardHeader>
          <h2 className="text-2xl font-bold">Currency Converter</h2>
          <p className="text-sm text-gray-400">Convert your currency in real-time</p>
        </CardHeader>

        <CardBody className="space-y-4">

          <Input type="number" uniqueId={uniqueId} label={'Amount'} />

          <div className="flex" >
            <Input placeholder="From" uniqueId={`${uniqueId}-from`}/>
            <Button className={"px-4 hover:text-blue-700 border-none transition-colors delay-75"}><SwapIcon /></Button>
            <Input placeholder="To" uniqueId={`${uniqueId}-to`}/>
          </div>

          <Button className={"w-full space-x-1 bg-black px-6 text-white transition-colors delay-75 hover:border hover:border-black hover:bg-white hover:text-black"} >
            <ArrowsClockwise  /> {/* use animate-spin for roatation/loading */}
            <span>Convert</span> {/*when loading set Converting*/}
          </Button>

            <Input type="number" label={'Result'} uniqueId={`${uniqueId}-to`} className={"cursor-not-allowed"} disabled />

        </CardBody>

        <CardFooter className={"mt-4"}>
        </CardFooter>
      </Card>
    </>
  );
}

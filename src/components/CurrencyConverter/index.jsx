import Card from "../Card";
import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardFooter";
import CardBody from "../Card/CardBody";

import Conversion from "./Conversion";
import CurrencyNames from "./CurrencyNames";

export default function CurrencyConverter() {
  return (
    <>
      <Card className="border-t-4 border-t-blue-600 md:max-w-md">
        <CardHeader title="Currency Converter" tagline="Convert your currency in real-time"/>

        {/*card content*/}
        <CardBody className="space-y-4">
          <CurrencyNames />
          <Conversion />
        </CardBody>

        <CardFooter className={"mt-4"} />
      </Card>
    </>
  );
}

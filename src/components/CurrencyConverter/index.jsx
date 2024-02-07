import Card from "@components/Card";
import CardHeader from "@components/Card/CardHeader";
import CardFooter from "@components/Card/CardFooter";
import CardBody from "@components/Card/CardBody";

import Conversion from "./Conversion";
import Currencies from "./Currencies";

export default function CurrencyConverter() {
  return (
    <>
      <Card className="border-t-4 border-t-blue-600 md:max-w-md">
        <CardHeader className="text-blue-600" title="Currency Converter" tagline="Convert your currency in real-time"/>

        {/*card content*/}
        <CardBody className="space-y-4">
          <Currencies />
          <Conversion />
        </CardBody>

        <CardFooter className="mt-4" />
      </Card>
    </>
  );
}

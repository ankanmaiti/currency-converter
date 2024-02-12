import Input from "@components/Elements/Input";
import useCurrencyExchangeRate from '@contexts/CurrencyExcnageRate'
import { useState } from "react";

export default function Conversion() {
  const [actualAmount, setActualAmount] = useState(1)
  const { exchangeRate } = useCurrencyExchangeRate()

  const convertedAmount = actualAmount && actualAmount * exchangeRate

  return (
    <div className="space-y-4 text-gray-700">
      <Input
        type="number"
        label='Actual Amount'
        value={actualAmount}
        onChange={e=>setActualAmount(e.target.value)}
      />
      <Input
        type="number"
        label='Converted Amount'
        className="cursor-not-allowed"
        value={convertedAmount.toFixed(3)}
        disabled
      />
    </div>
  )
}

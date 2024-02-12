
import SwapIcon from "@components/Icons/SwapIcon";
import Input from "@components/Elements/Input";
import Button from '@components/Elements/Button'


import useCurrencyExchangeRate from '@contexts/CurrencyExcnageRate'

export default function Currencies() {
  const { from, to, setFrom, setTo } = useCurrencyExchangeRate()

  function handleSwap() {
    setFrom(to)
    setTo(from)
  }

  return (
    <>
      <div className="flex" >
        <Input
          placeholder="From"
          value={from}
          onChange={ e=>setFrom(e.target.value) }
          min="3"
          max="10"
        />
        <Button onClick={handleSwap}><SwapIcon/></Button>
        <Input
          placeholder="To"
          value={to}
          onChange={ e=>setTo(e.target.value) }
          min="3"
          max="10"
        />
      </div>
    </>
  )
}

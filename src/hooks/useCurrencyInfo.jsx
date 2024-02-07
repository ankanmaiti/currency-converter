import { useState, useEffect } from "react";
import { useState } from "react";
import fetchCurrencyExchangeRate from "@utils/fetchCurrencyExchangeRate";


export default function useCurrencyExchangeRate() {
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState('usd')
  const [exchangeRate, setExchangeRate] = useState(1)

  useEffect(() => {
    if (from.length < 3 || to.length < 3) return

    // check if the data already exist in the session storage
    const storageKey = `${from}-${to}`
    const storageData = sessionStorage.getItem(storageKey)
    if (storageData) {
      const rate = JSON.parse(storageData) // can return string
      setExchangeRate(Number(rate))
    }

    // fetch data from url if data is not exits in the system storage
    fetchCurrencyExchangeRate(from, to)
      .then(rate => setExchangeRate(rate))
      .then(rate => sessionStorage.setItem(storageKey, JSON.stringify(rate)))
      .error(console.error)

  }, [from, to])

  return { from, to, setFrom, setTo, exchangeRate }
}

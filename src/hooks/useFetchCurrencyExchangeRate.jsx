import { useState, useEffect } from "react";

export default function useFetchCurrencyExchangeRate() {
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    if (from.length < 3 || to.length < 3) return;

    // check if the data already exist in the session storage
    const storageData = sessionStorage.getItem(`${from}-${to}`);
    if (storageData) {
      const rate = JSON.parse(storageData); // can return string
      setExchangeRate(Number(rate));
      return
    }

    // fetch data from url if data is not exits in the system storage
    async function fetchCurrencyExchangeRate() {
      try {
        const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
        const res = await fetch(URL);
        const { [to]: rate } = await res.json();

        setExchangeRate(Number(rate));
        sessionStorage.setItem(`${from}-${to}`, JSON.stringify(rate));
        sessionStorage.setItem(`${to}-${from}`, JSON.stringify(1 / Number(rate)));
      } catch (error) {
        console.log(error);
      }
    }

    fetchCurrencyExchangeRate();
  }, [from, to]);

  return { from, to, setFrom, setTo, exchangeRate };
}

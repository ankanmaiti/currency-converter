import { useState, useEffect } from "react";
import useBrowserStorage from "./useBrowserStorage";
import fetchCurrencyExchangeRate from "@utils/fetchCurrencyExcangeRate";

export default function useFetchCurrencyExchangeRate() {
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const {
    storedData: exchangeRate,
    setStoredData: setExchangeRate,
    setStorageKey,
    setNewStorageData,
  } = useBrowserStorage("sessionStorage");


  useEffect(()=>{
    if (from.length < 3 || to.length < 3) return;

    // reset storage key
    setStorageKey(`${from}-${to}`);
  }, [from, to]);


  useEffect(() => {
    // check if the data already exist in sessionStorage
    if (exchangeRate) {
      return ()=>{};
    }

    // If data doesn't exits in sessionStorage
    ;(async function () {
      const rate = await fetchCurrencyExchangeRate(from, to);
      setExchangeRate(rate);
      setNewStorageData(`${to}-${from}`, 1 / rate);
    })();

  }, [exchangeRate]);

  return { from, to, setFrom, setTo, exchangeRate };
}

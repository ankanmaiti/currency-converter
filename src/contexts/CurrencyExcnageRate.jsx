import { createContext, useContext } from "react";
import useFetchCurrencyExchangeRate from "@hooks/useFetchCurrencyExchangeRate";

const CurrencyExcangeRateContext = createContext(1);

export function CurrencyExcangeRateProvider({ children }) {
  const { from, to, setFrom, setTo, exchangeRate } =
    useFetchCurrencyExchangeRate();

  return (
    <CurrencyExcangeRateContext.Provider
      value={{ from, to, setFrom, setTo, exchangeRate }}
    >
      {children}
    </CurrencyExcangeRateContext.Provider>
  );
}

const useCurrencyExchangeRate = () => useContext(CurrencyExcangeRateContext);
export default useCurrencyExchangeRate;

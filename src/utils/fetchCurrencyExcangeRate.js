
export default async function fetchCurrencyExchangeRate(from, to) {
  try {
    const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
    const res = await fetch(URL);
    const { [to]: rate } = await res.json();
    return rate;
  } catch (error) {
    console.log(error);
  }
}




export default async function fetchCurrencyExchangeRate(from, to) {
  try {
    const res = await fetch(`/api/currencies/${from}/${to}.json`)
    const { [to]: rate } = await res.json()
    return Number(rate)

  } catch (error) {
    console.error(`Error (fetchCurrencyExchangeRate : )`, error)
  }
}

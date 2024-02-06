async function fetchJson(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()

    return data
    
  } catch (error) {
   console.error('Error fetchJson : ', error) 
  }
}



export default fetchJson

const CAR_API = 'http://localhost:3000'

export const getCars = (listName) => {
  const url = `${CAR_API}/cars/${listName}`
  return fetch(url)
  .then(res => res.json())
}
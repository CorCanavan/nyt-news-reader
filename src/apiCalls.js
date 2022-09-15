const apiKey = process.env.REACT_APP_API_KEY

 export const getSectionArticles = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Something went wrong! Please try again later.")
    } else {
      return response.json()
    }
  })
}
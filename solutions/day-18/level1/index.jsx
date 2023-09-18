// What is HTTP request?
// What are the most common HTTP requests?
// What is fetch?
// What is axios?
// What is the difference between fetch and axios?
// Do you prefer fetch to axios for make HTTP requests?



// fetchCountryData = async () => {
//     const url = 'https://restcountries.eu/rest/v2/all'
//     try {
//       const response = await fetch(url)
//       const data = await response.json()
//       this.setState({
//         data,
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }



// fetchCountryData = async () => {
//     const url = 'https://restcountries.eu/rest/v2/all'
//     try {
//       const response = await axios.get(url)
//       const data = await response.data
//       this.setState({
//         data,
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
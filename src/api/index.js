const apiKey = process.env.REACT_APP_API_KEY

/* creates headers of the HTTP Post and Patch requests*/
export const createHeaders = () => {
  return {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  }
}
export default createHeaders

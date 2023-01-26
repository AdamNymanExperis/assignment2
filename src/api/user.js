import createHeaders from "./index.js"
const apiUrl = process.env.REACT_APP_API_URL

/* Sends a HTTP Get request to get a specific user given the users username */
const getUser = async (username) => {
  const response = await fetch(`${apiUrl}?username=${username}`)
  try {
    if (!response.ok) {
      throw new Error("User not found")
    }
    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

/* Creates a new user using a HTTP Post request */
const createUser = async (username) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: createHeaders(),
    body: JSON.stringify({
      username,
      translations: [],
    }),
  })
  try {
    if (!response.ok) {
      throw new Error("User can not be created")
    }
    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

/* Checks if there exists a user with a given username in the database,
 if the user doesnt exist it sends creates a new user with that name */
export const loginUser = async (username) => {
  const [checkError, user] = await getUser(username)

  if (checkError !== null) {
    return [null, user]
  }

  if (user.length > 0) {
    return [null, user.pop()]
  }

  return await createUser(username)
}

export default loginUser

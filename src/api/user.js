import createHeaders from './index.js'
const apiUrl = process.env.REACT_APP_API_URL

const getUser = async (username) => {
    console.log("in getUser")
    console.log(apiUrl)
    const response = await fetch(`https://gratis-precious-ringer.glitch.me/translations?username=${username}`)
    try{
        if(!response.ok){
            console.log('in !response')
            throw new Error('User not found')
        }
        console.log(response)
        const data = await response.json()
        console.log('data' + data)
        return [null, data]

    } catch(error) {
        return [error.message, []]
    }  
}

const createUser = async (username) => {

    console.log('in create user')
    const response = await fetch(apiUrl,{
        method:'POST', 
        headers: createHeaders(),
        body: JSON.stringify({
            username,
            translations: []
        })
    } )
    try{
        if(!response.ok){
            throw new Error('User can not be created')
        }
        const data = await response.json() 
        return [null, data]

    } catch(error) {
        return [error.message, []]
    }  
}

export const loginUser = async (username) => {
    
    const [checkError, user ] = await getUser(username)
    
    console.log(checkError)

    if(checkError !== null) {
        console.log('in error')
        return [null, user ]
    }

    if(user.length > 0) {
        console.log('in user exist')
        return [null, user.pop()]
    }

    return await createUser(username)
}

export default loginUser
    
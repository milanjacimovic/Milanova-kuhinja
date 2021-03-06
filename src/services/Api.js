// import React from 'react'
import axios from 'axios'

const getUsers = async () => {
    const res = await axios.get('https://coetus.herokuapp.com/api/users')


}

const getUserById = async (user_id) => {
    return await axios.get(`https://coetus.herokuapp.com/api/users/${user_id}`)
}

const registerUser = async (user) => {
    return await axios.put('https://coetus.herokuapp.com/api/users',
        (user))
}


const loginUser = async (username, password) => {
    return await axios.post('https://coetus.herokuapp.com/api/users', {
        username: username,
        password: password

    })

}

export { getUsers, registerUser, loginUser, getUserById }
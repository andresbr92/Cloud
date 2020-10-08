import axios from 'axios'

const userService = axios.create({
    baseURL: 'https://reqres.in/'
})

export default userService
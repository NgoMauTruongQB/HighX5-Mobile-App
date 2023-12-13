import axios from 'axios'

const apiUrl = 'https://highx5-manager-event-mobile.onrender.com'

const getUserDetail = async (token) => {
}

const login = async ({ gmail, password }) => {
    try {
        const response = await axios.post(
            `${apiUrl}/api/auth/login`,
            {
                gmail,
                password,
            },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        )
        return response.data
    } catch (error) {
        throw error
    }
}

export default {
    getUserDetail,
    login,
}

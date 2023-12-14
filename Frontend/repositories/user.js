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

const updatePassword = async (id, old_password, new_password_1, new_password_2) => {
    try {
        const response = await axios.put(
            `${apiUrl}/api/user/update_password/`,
            {
                id,
                old_password,
                new_password_1,
                new_password_2
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
    updatePassword
}

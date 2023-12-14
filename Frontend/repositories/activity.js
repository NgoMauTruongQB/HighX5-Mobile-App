import axios from 'axios'

const apiUrl = 'https://highx5-manager-event-mobile.onrender.com'

const getMyTasks = async (user_id, status = 2) => {
    try {
        const response = await axios.get(`${apiUrl}/api/activity/get_activity_by_user_id/?status=${status}&user_id=${user_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const createTask = async (task) => {
    try {
        const response = await axios.post(`${apiUrl}/api/activity/create_activity/`, task)
        return response.data
    } catch (error) {
        throw error
    }
}

export default {
    getMyTasks,
    createTask
}

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

const taskCompleted = async (status = 1, activity_id, candidate_id) => {
    try {
        const response = await axios.put(
            `${apiUrl}/api/activity/update_activity/`,
            {
                status,
                activity_id,
                candidate_id
            },
            {
                headers: { 'content-type': 'application/json'},
            }
        )
        return response.data
    } catch (error) {
        throw error
    }
}

const getTaskEventJoined = async (status = 1, event_id) => {
    try {
        console.log(status, event_id)
        const response = await axios.get(`${apiUrl}/api/activity/get_activity_by_event_id/?status=${status}&event_id=${event_id}`)
        return response.data
    } catch (error) {
        throw err
    }
}

const acceptTask = async (status = 0, activity_id, candidate_id) => {
    try {
        const response = await axios.put(
            `${apiUrl}/api/activity/update_activity/`,
            {
                status,
                activity_id,
                candidate_id
            },
            {
                headers: { 'content-type': 'application/json'},
            }
        )
        return response.data
    } catch (error) {
        throw error
    }
}

export default {
    getMyTasks,
    taskCompleted,
    getTaskEventJoined,
    acceptTask
}

import axios from 'axios'

const apiUrl = 'https://highx5-manager-event-mobile.onrender.com'

const getEvents = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/event`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getEventsHome = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/event/list_events_by_num_candidates/2`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getEventDetail = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/api/event/event_detail/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getEventByUserId = async (userId) => {
    try {
        const response = await axios.get(`${apiUrl}/api/candidate/event_take_part_in/${userId}`)
        return response.data
    } catch (error) {
        throw error
    }
}
export default {
    getEvents,
    getEventsHome,
    getEventDetail
}

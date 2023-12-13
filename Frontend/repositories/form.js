import axios from 'axios'
import axiosClient from './axiosClient'

const apiUrl = 'https://highx5-manager-event-mobile.onrender.com'

const getFormByEventId = async (event_id) => {
    try {
        const response = await axiosClient.get(`/api/form/application_form/${event_id}`)
        return response.data.rows[0]
    } catch (error) {
        throw error
    }
}

const getAnswerOfEvent = async (event_id, user_id) => {
    try {
        const data = {
            event_id : event_id,
            user_id : user_id
        }
        const response = await axiosClient.get(`/api/form/application_form_of_candidate/`,data)
        return response.data.rows[0]
    } catch (error) {
        throw error
    }
}

export default {
    getFormByEventId,
    getAnswerOfEvent,
}

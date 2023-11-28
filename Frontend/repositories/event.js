import axios from 'axios'

const SERVER_NAME = 'localhost:3000'

const getEvents = async () => {
    try {
        const response = await axios.get(`http://${SERVER_NAME}/events`)
        return response.data
    } catch (error) {
        throw error
    }
}

export default {
    getEvents,
}

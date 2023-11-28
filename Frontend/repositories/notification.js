import axios from 'axios'

const SERVER_NAME = 'localhost:3000'

const getNotifications = async () => {
    try {
        const response = await axios.get(`http://${SERVER_NAME}/notifications`)
        return response.data
    } catch (error) {
        throw error
    }
}

export default {
    getNotifications,
}

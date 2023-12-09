import moment from 'moment'

const formatDateTime = (dateTimeString, outputFormat = 'DD/MM/YYYY') => {
    const formattedDateTime = moment(dateTimeString).format(outputFormat)
    return formattedDateTime
}

export default formatDateTime

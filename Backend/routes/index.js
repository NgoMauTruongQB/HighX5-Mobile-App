const auth = require('./auth.route')
const user = require('./user.route')
const notification = require("./notification.route")
const event = require("./event.route")


module.exports = {
    auth : auth,
    user : user,
    notification : notification,
    event : event,
}

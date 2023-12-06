const auth = require('./auth.route')
const user = require('./user.route')
const notification = require("./notification.route")
const event = require("./event.route")
const candidate = require("./candidate.route")
const uploadImage = require("./upload.image.route")
const faculity = require("./faculity.route")

module.exports = {
    auth : auth,
    user : user,
    notification : notification,
    event : event,
    candidate : candidate,
    uploadImage : uploadImage,
    faculity : faculity,
}

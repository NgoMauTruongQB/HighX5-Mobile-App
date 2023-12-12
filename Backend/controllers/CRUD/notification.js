const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

const include = [
    {
        model: models.NotificationDetail,
        attributes: ["user_id"],
    },
];

async function getNotificationByUserId(userID) {
    return models.Notification.findAndCountAll(
        objectCleaner.clean({
            order: [["id", "ASC"]],
            include : include,
            where : {
                '$NotificationDetails.user_id$' : userID,
            }
        })
    );
}

async function create(notification) {
    return models.Notification.create(notification);
}

module.exports = {
    getNotificationByUserId: getNotificationByUserId,
    createNotification : create
};

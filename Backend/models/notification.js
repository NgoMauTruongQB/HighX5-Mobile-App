'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notification.belongsTo(models.Event, {foreignKey : "event_id"})
      Notification.belongsTo(models.Candidate, {foreignKey : "createdBy"})
    }
  }
  Notification.init({
    event_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    content: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};
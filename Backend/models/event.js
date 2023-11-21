'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.hasMany(models.Department, {foreignKey : "department_id"})
      Event.hasMany(models.Finance, {foreignKey : "event_id"})
      Event.hasMany(models.Form, {foreignKey : "event_id"})
      Event.hasMany(models.Answer, {foreignKey : "event_id"})
      Event.hasMany(models.Schedule, {foreignKey : "event_id"})
      Event.hasMany(models.Notification , {foreignKey : "event_id"})
      Event.belongsTo(models.User,{foreignKey : "createdBy"})
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    sologan: DataTypes.STRING,
    date_start: DataTypes.DATE,
    date_end: DataTypes.DATE,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Finance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Finance.belongsTo(models.Activity, {foreignKey : "activity_id"})
      Finance.belongsTo(models.Event, {foreignKey : "event_id"})
    }
  }
  Finance.init({
    activity_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    money: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Finance',
  });
  return Finance;
};
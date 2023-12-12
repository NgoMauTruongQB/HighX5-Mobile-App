'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Form.belongsTo(models.Event, {foreignKey : "event_id"})
      Form.belongsTo(models.Candidate, {foreignKey : "createdBy"})
    }
  }
  Form.init({
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    event_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};
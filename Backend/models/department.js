'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Department.hasMany(models.Candidate, {foreignKey : "department_id"})
      Department.hasMany(models.Activity, {foreignKey : "department_id"})
      Department.belongsTo(models.Event, {foreignKey : "event_id"})
    }
  }
  Department.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    event_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.Form, {foreignKey : "form_id"})
    }
  }
  Question.init({
    form_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    Question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
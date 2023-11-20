'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer.belongsTo(models.Question, {foreignKey : "question_id"})
      Answer.belongsTo(models.User, {foreignKey : "user_id"})
      Answer.belongsTo(models.Event, {foreignKey : "event_id"})
    }
  }
  Answer.init({
    question_id: DataTypes.INTEGER,
    question_category: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
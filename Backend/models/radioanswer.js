'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RadioAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RadioAnswer.belongsTo(models.Question , {foreignKey : 'question_id'})
    }
  }
  RadioAnswer.init({
    question_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RadioAnswer',
  });
  return RadioAnswer;
};
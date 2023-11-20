'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Faculity.hasMany(models.User, {foreignKey : "faculity_id"})
    }
  }
  Faculity.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Faculity',
  });
  return Faculity;
};
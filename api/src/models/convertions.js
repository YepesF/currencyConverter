'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Convertions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Convertions.init({
    name: DataTypes.STRING,
    cop: DataTypes.DOUBLE,
    usd: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Convertions',
  });
  return Convertions;
};
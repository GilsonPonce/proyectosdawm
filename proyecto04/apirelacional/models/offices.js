'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  offices.init({
    officeCode: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    territory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'offices',
  });
  return offices;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employees.init({
    employeeNumber: DataTypes.INTEGER,
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    extension: DataTypes.STRING,
    email: DataTypes.STRING,
    officeCode: DataTypes.STRING,
    reportsTo: DataTypes.INTEGER,
    jobTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employees',
  });
  return employees;
};
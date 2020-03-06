'use strict';
module.exports = (sequelize, DataTypes) => {
  const RefreshToken = sequelize.define('RefreshToken', {
    userId: DataTypes.INTEGER,
    refreshToken: DataTypes.TEXT
  }, {});
  RefreshToken.associate = function(models) {
    // associations can be defined here
  };
  return RefreshToken;
};
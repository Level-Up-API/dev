'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFacebook = sequelize.define('UserFacebook', {
    familyName: DataTypes.STRING
  }, {});
  UserFacebook.associate = function(models) {
    // associations can be defined here
  };
  return UserFacebook;
};
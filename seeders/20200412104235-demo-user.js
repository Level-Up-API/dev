module.exports = {
  up: (queryInterface, Sequelize, firstNameUp, lastNameUp, emailUp) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: firstNameUp,
      lastName: lastNameUp,
      email: emailUp,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
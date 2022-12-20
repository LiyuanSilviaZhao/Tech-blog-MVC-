const { User } = require('../models');

const userData = [{
      "username": "Silvia",
      "password": "password12345"
    }
  ];


  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;
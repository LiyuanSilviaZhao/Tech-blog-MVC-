const { User } = require('../models');

const userData = [{
      "username": "Silvia",
      "password": "password12345"
    },
    {
      "username": "Leo",
      "password": "password12345"
    },
    {
      "username": "Amy",
      "password": "password12345"
    }
  ];


  const seedUser = () => User.bulkCreate(userData);

  module.exports = seedUser;
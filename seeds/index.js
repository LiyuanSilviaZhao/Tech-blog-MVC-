const sequelize = require('../config/connection');

const seedUsers = require('./userData.js');
const seedPosts = require('./postData.js');
const seedComments = require('./commentData.js');

  const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedPosts();
    await seedComments();
    await seedUsers();

    console.log("seeded!")

    process.exit(0);
};

seedAll();

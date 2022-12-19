const sequelize = require('../config/connection');

const seedUser = require('./userData.js');
const seedPosts = require('./postData.js');
const seedComments = require('./commentData.js');

  const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedPosts();
    await seedComments();
    await seedUser();

    console.log("seeded!")

    process.exit(0);
};

seedAll();

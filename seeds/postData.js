const { Post } = require('../models');

const postData = [{
      "title": "The standard Lorem Ipsum passage, used since the 1500s",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "user_id":"1"
    }
  ];

  const seedPosts = () => Post.bulkCreate(postData);
  
  module.exports = seedPosts;
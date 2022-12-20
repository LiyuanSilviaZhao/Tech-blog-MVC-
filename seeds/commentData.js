const { Comment } = require('../models');

const commentData = [{
      "content": "I like it!!!",
      "user_id":"1",
      "postid":"1"

    }
  ];

  const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
const { Comment } = require('../models');

const commentData = [{
      "content": "I like it!!!",
      "user_id":"1",
      "post_id":"1"

    }
  ];

  const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
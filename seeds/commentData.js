const { Comment } = require('../models');

const commentData = [{
      "content": "I like it!!!",
      "user_id":"2",
      "post_id":"1"

    },
    {
      "content": "I like it, tooooooooo!!!",
      "user_id":"1",
      "post_id":"3"
    },
    {
      "content": "Have a nice day!",
      "user_id":"3",
      "post_id":"2"
    }
  ];

  const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
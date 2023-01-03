const  Comment  = require('../models/Comment');

const commentData = [
  {
    comment_content:'yes you can',
    post_id: 1,
    user_name:"allan"

  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
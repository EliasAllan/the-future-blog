const  Comment  = require('../models/Comment');

const commentData = [
  {
    comment_content:'great presents this year',
    post_id: 1,
    user_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
const  Post  = require('../models/Post');

const postData = [
  {
    title: 'Shirts',
    content:'asdasdas',
    user_id: 1
  },
  {
    title: 'Shorts',
    content:'asdasdas',
    user_id: 2
  },
  {
    title: 'Music',
    content:'asdasdas',
    user_id: 2,
  },
  {
    title: 'Hats',
    content:'asdasdas',
    user_id: 2,

  },
  {
    title: 'Shoes',
    content:'asdasdas',
    user_id: 1,

  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
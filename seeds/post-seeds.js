const  Post  = require('../models/Post');

const postData = [
  {
    title: 'Shirts',
    content:'asdasdas'
  },
  {
    title: 'Shorts',
    content:'asdasdas'
  },
  {
    title: 'Music',
    content:'asdasdas'
  },
  {
    title: 'Hats',
    content:'asdasdas'
  },
  {
    title: 'Shoes',
    content:'asdasdas'
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
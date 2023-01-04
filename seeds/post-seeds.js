const  Post  = require('../models/Post');

const postData = [
  {
    title: 'merry christmas',
    content:'lets open some presents',
    user_id: 1
  },
  {
    title: 'happy new year',
    content:'lets have a good time',
    user_id: 2
  },
  {
    title: 'Group projects',
    content:'they are challenging',
    user_id: 2,
  },
  {
    title: 'Caffeine',
    content:'yes please',
    user_id: 2,

  },
  {
    title: 'Coding is fun',
    content:'actually',
    user_id: 1,

  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
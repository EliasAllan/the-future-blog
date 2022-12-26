const  Post  = require('../models/Post');

const postData = [
  {
    title: 'Coding is hard',
    content:'kill me',
    user_id: 1
  },
  {
    title: 'What is sleep',
    content:'This better make lots of $$$',
    user_id: 2
  },
  {
    title: 'Late night coding',
    content:'Coding is better at night time',
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
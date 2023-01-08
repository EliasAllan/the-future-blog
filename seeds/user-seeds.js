
const  {User}  = require('../models/');

const userData = [
  {
    "name":'allan',
    "email": 'allan@gmail.com',
    "password":'rootroot1'
  },
  {
    "name":'elias',
    "email": 'elias@gmail.com',
    "password":'rootroot1'
  },
  {
    "name":'allanelias',
    "email": 'allanrnelias@gmail.com',
    "password":'rootroot1'
  }

];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks:true,
  returning:true
});

module.exports = seedUser;
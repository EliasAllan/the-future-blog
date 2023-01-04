const  User  = require('../models/User');

const userData = [
  {
    id: '1',
    name:'allan',
    email: 'allan@gmail.com',
    password:'rootroot1'
  },
  {
    id: '2',
    name:'elias',
    email: 'elias@gmail.com',
    password:'rootroot1'
  },
  {
    id: '3',
    name:'allanelias',
    email: 'allanrnelias@gmail.com',
    password:'rootroot1'
  }

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
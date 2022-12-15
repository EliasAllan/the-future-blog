const  User  = require('../models/User');

const userData = [
  {
    id: '1',
    name:'allan',
    email: 'allan@email.com',
    password:'root'
  },
  {
    id: '2',
    name:'elias',
    email: 'elias@email.com',
    password:'rootroot'
  }

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
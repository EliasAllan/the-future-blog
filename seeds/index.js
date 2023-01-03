const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');
const seedComment = require('./comment-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  
  await seedPost();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  
  await seedComment();
  console.log('\n----- CATEGORIES SEEDED -----\n');


  // await seedTags();
  // console.log('\n----- TAGS SEEDED -----\n');

  // await seedProductTags();
  // console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};


seedAll();

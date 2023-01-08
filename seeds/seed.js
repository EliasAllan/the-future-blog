const sequelize = require('../config/connection');
const {User, Comment , Post  } = require('../models');

const userData = require('./userData.json');
const commentData = require('./commentData.json');
const postData = require('./postData.json');

const seedDatabase = async (cb) => {
    await sequelize.sync({force: true});
    
    
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    
    
    const post = await Post.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    });
    
    const comment = await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });
    
    




    // process.exit(0);
    cb();
};

// seedDatabase();
module.exports = seedDatabase;
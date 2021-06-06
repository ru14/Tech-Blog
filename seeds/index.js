const seedUsers = require('./user-seed');
const seedBlog = require('./blog-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBlog();
    await seedComment();
    process.exit(0);
};

seedAll();
const seedUsers = require('./user-seeds');

const seedBlog = require('./blog-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBlog();
    process.exit(0);
};

seedAll();
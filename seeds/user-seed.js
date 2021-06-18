const { User } = require('../models');

const userData = [{
        username: 'John',
        email: 'john@john.com',
        password: 'john'

    },
    {
        username: 'Jake',
        email: 'Jake@Jake.com',
        password: 'jake'
    },
    {
        username: 'Joe',
        email: 'Joe@Joe.com',
        password: 'joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
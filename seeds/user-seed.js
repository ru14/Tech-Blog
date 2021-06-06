const { User } = require('../models');

const userData = [{
        name: 'John',
        email: 'john@john.com',
        password: 'john'

    },
    {
        name: 'Jake',
        email: 'Jake@Jake.com',
        password: 'jake'
    },
    {
        name: 'Joe',
        email: 'Joe@Joe.com',
        password: 'joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
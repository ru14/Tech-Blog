const { Comment } = require('../models');

const commentData = [{
        comment_text: "Its a food !",
        user_id: 1,
        blog_id: 1,
        
    },
    {
        comment_text: "Its a food !",
        user_id: 2,
        blog_id: 2,
       
    },
    {
        comment_text: "Its a food !",
        user_id: 3,
        blog_id: 3,
       
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
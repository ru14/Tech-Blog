const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init({
   comment_text: {
        type: DataTypes.STRING,

    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    });
    module.exports = Comment;
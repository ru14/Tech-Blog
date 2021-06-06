
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model { }

Blog.init(
  {
   
    blog_header: {
      type: DataTypes.STRING,
      allowNull: false
    },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
        {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog'
  });

module.exports = Blog;

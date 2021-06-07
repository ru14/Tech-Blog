const { Blog } = require('../models');


const blogData = [
    {
      
      blog_header: 'Food',
      description: 'French baguette with warm brie',
      user_id: 1
    },
    {
     
      blog_header: 'Food',
      description:
        'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
        user_id: 2
    },
    {
      
      blog_header: 'Food',
      description:
        'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
        user_id: 3
    }
  ];

  const seedBlog = () => Blog.bulkCreate(blogData);

  module.exports = seedBlog;
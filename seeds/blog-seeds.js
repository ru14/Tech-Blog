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
    },
    {
      
      blog_header: 'Food',
      description: 'Guava, papaya, pineapple, mango, and star fruit',
      user_id: 4
    },
    {
      
      blog_header: 'Food',
      description:
        'Homemade japanese dumplings stuffed with a pork and green onion filling',
        user_id: 5
    },
    {
      
      blog_header: 'Food',
      description:
        'Marinated lamb blog with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
        user_id: 6
    },
    {
      
      blog_header: 'Food',
      description: 'Chicken and vegitable curry blog with basmati rice',
      user_id: 7
    },
  ];

  const seedBlog = () => Blog.bulkCreate(blogData);

  module.exports = seedBlog;
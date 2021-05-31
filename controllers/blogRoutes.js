const router = require('express').Router();
// Here is where we provide hardcoded data to render dynamically
const blogs = [
  {
    bloger_name: 'Fride',
    blog_header: 'Food',
    description: 'French baguette with warm brie',
  },
  {
    bloger_name: 'Chelisa',
    blog_header: 'Food',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
  },
  {
    bloger_name: 'Fin',
    blog_header: 'Food',
    description:
      'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
  },
  {
    bloger_name: 'Tim',
    blog_header: 'Food',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
  },
  {
    bloger_name: 'Gyoza',
    blog_header: 'Food',
    description:
      'Homemade japanese dumplings stuffed with a pork and green onion filling',
  },
  {
    bloger_name: 'Yebeg',
    blog_header: 'Food',
    description:
      'Marinated lamb blog with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
  },
  {
    bloger_name: 'Cape Malay',
    blog_header: 'Food',
    description: 'Chicken and vegitable curry blog with basmati rice',
  },
];

//get all blogs
router.get('/', async (req, res) => {
  res.render('post',{ postblogs: postblogs });// name of handlebar view
});

//get one blog
router.get('/:num', async (req, res) => {
  return res.render('post', postblogs[req.params.num - 1]);
});

module.exports = router;

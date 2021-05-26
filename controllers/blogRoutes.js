const router = require('express').Router();
// Here is where we provide hardcoded data to render dynamically
const blogs = [
  {
    bloger_name: 'Fride',
    description: 'French baguette with warm brie',
  },
  {
    bloger_name: 'Chelisa',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
  },
  {
    bloger_name: 'Fin',
    description:
      'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
  },
  {
    bloger_name: 'Tim',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
  },
  {
    bloger_name: 'Gyoza',
    description:
      'Homemade japanese dumplings stuffed with a pork and green onion filling',
  },
  {
    bloger_name: 'Yebeg',
    description:
      'Marinated lamb blog with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
  },
  {
    bloger_name: 'Cape Malay',
    description: 'Chicken and vegitable curry blog with basmati rice',
  },
];

//get all blogs
router.get('/', async (req, res) => {
  res.render('all');
});

//get one blog
router.get('/blog/:num', async (req, res) => {
  return res.render('blog', blogs[req.params.num - 1]);
});

module.exports = router;

const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
  res.render('books/indexHome', { title: 'Homeeeeeee' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const quote = require('../controllers/quote');

router.get('/', function(req, res) {
    res.status(200).send({ message: 'Welcome to Items API' });
  });
router.post('/quotes', quote.addNewQuote);

module.exports = router;
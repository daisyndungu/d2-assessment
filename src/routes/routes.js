const express = require('express');
const router = express.Router();

const quote = require('../controllers/quote');

router.get('/', function(req, res) {
    res.status(200).send({ message: 'Welcome to Items API' });
  });
router.post('/quotes', quote.addNewQuote);
router.get('/quotes/:id', quote.getQuoteByID);
router.delete('/quotes/:id', quote.deleteQuoteByID);
router.get('/quotes', quote.getAllQuotes);
router.put('/quotes/:id', quote.updateQuote);

module.exports = router;
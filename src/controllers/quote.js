const Quote = require('../models/quotesModel');

// add new quote

function addNewQuote(req, res){
    var quote = new Quote(req.body);
    quote.save((err, quote) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send({message: quote});
        }
    });
}

module.exports = {addNewQuote};
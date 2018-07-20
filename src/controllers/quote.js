const Quote = require('../models/quotesModel');

// add new quote

function addNewQuote(req, res){
    const quote = new Quote(req.body);
    quote.save((err, quote) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send({message: quote});
        }
    });
}

function getQuoteByID(req, res){
    // const quote = new Quote();
    Quote.findById({_id: req.params.id}, (err, quote) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send({message: quote})
        }
    });
}

function deleteQuoteByID(req, res){
    Quote.findByIdAndRemove({_id: req.params.id}, (err, quote) => {
        if(err){
            res.status(500).send(err);
        } else if(!quote){
            res.status(404).send({message: "Quote not found"});
        } else {
            res.status(200).send({message: "deleted!"});
        }
    }
);
}
module.exports = {addNewQuote, getQuoteByID, deleteQuoteByID};
const Quote = require('../models/quotesModel');

// add new quote

function addNewQuote(req, res){
    const quote = new Quote(req.body);
    quote.save((err, quote) => {
        if(err){
            return res.status(500).send(err);
        } else {
            return res.status(201).send({message: quote});
        }
    });
}
function findLongestWord(quote){
    const quoteArray = quote.split(" ");
    const longestWord = quoteArray.reduce((word, nextWord) => {
        if(word.length > nextWord.length){
            return word;
        } else {
            return nextWord;
        }
    });
    return longestWord;
}

function getQuoteByID(req, res){

    Quote.findById({_id: req.params.id}, (err, quote) => {
        if(err){
            res.status(500).send(err)
        } else if (quote.length){
            return res.status(404).send({message: "quote not found"})
        } else {
            const longestWord = findLongestWord(quote.quote);
            return res.status(200).send({message: quote, Longest_word: longestWord, length_of_the_longest_word: longestWord.length});
        }
    });
}

function deleteQuoteByID(req, res){
    Quote.findByIdAndRemove({_id: req.params.id}, (err, quote) => {
        if(err){
            return res.status(500).send(err);
        } else if(!quote){
            return res.status(404).send({message: "Quote not found"});
        } else {
            return res.status(200).send({message: "deleted!"});
        }
    }
);
}

function getAllQuotes(req, res){
    Quote.find(req.query, (err, quotes) =>{
        if(err){
            return res.status(500).send({message: err});
        } else if(quotes.length == 0) {
            return res.status(404).send({message: "quotes not found"});
        } else {
            return res.status(200).send({message: "quotes found", quotes});
        }
    });
}

function updateQuote(req, res){
    Quote.findByIdAndUpdate({_id: req.params.id}, req.body, (err, quote) => {
        if(!quote){
            return res.status(404).send({message: "quote not found"});
        } else if (err) {
            return res.status(500).send({message: err});
        } else{
            return res.status(200).send({message: "quotes modified"});
        }
    });
}

module.exports = {addNewQuote, getQuoteByID, deleteQuoteByID, getAllQuotes, updateQuote};
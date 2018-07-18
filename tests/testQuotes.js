const app = require('../server');
const mocha = require('mocha');
const chai = require('chai');
const should =  require('should');
const quotes = require("../src/models/quotesModel");

chai(chai-http);

describe( 'Qoute', () => {

    it('should test adding a new quote', (done) => {
        chai.http()
        .post("/qoute")
        .send(
            {author: "Daisy", "year": 2018, qoute: "testing add one quote"})
        .end(
            assert.res.status.eql(201)
        )
    });
}
)
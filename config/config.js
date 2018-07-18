const dotenv = require('dotenv').config();

const test= {
    DATABASE_URL: process.env.TEST_DATABASE_URL
};

const dev= {
    DATABASE_URL: process.env.DEV_DATABASE_URL
};

const config ={
    test,
    dev
}

module.exports = config;
const dotenv = require('dotenv').config();

const staging= {
    DATABASE_URL: process.env.TEST_DATABASE_URL
};

const production= {
    DATABASE_URL: process.env.DEV_DATABASE_URL
};

const config ={
    staging,
    production
}

module.exports = config;
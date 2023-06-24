const express = require('express');
require('dotenv').config();
const donations = require('./donation');
const errorMW = require('../middlewares/errors');
const DonationService = require('../services/donationService');

const app = express();
app.use(express.json());

app.use('/api/donations', donations);

app.use(errorMW);

app.listen(3000, () => {
    console.log('server is up and running')
});
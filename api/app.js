const express = require('express');
require('dotenv').config();
const donations = require('./donation');
const DonationService = require('../services/donationService')

const app = express();
app.use(express.json());

app.use('/api/donations', donations);

app.listen(3000, () => {
    console.log('server is up and running')
});
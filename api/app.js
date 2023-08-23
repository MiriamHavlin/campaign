const express = require('express');
require('dotenv').config();
const donations = require('./donation');
const fundRaiser = require('./FundRaiser');
const groups = require('./group');
const campaign = require('./campaign');

const errorMW = require('../middlewares/errors');

const app = express();
app.use(express.json());

app.use('/api/donations', donations);
app.use('/api/fundRaisers',fundRaiser);
app.use('/api/groups', groups);
app.use('/api/campaigns', campaign);


// app.use(errorMW);

app.listen(3000, () => {
    console.log('server is up and running')
});
//a minor change for a commit
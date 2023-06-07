
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    sum: Number,
    fundraiserId: String,
    donorName: String
});

const DonationModel = mongoose.model("donations", donationSchema);

exports.DonationModel = DonationModel;


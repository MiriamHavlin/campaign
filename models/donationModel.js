
const Joi = require('joi');
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    sum: Number,
    fundraiserId: String,
    donorName: String
}, {collection: "donations"});

const validDonation = (_bodyData)=>{
    let joiSchema=Joi.object({
    sum:Joi.number().min(10).required,
    fundraiserId:Joi.string().required,
    donorName:Joi.string().default("anonymous")
    })
    return joiSchema.validate(_bodyData);
    }

module.exports = validDonation;
const DonationModel = mongoose.model("donations", donationSchema);

module.exports = DonationModel;



const Joi = require('joi');
const mongoose = require('mongoose');

const fundRaiserSchema = new mongoose.Schema({
    target : Number,
    groupId: String,
    name: String
}, {collection: "fundRaisers"});

const FundRaiserModel = mongoose.model("fundRaisers", fundRaiserSchema);

exports.FundRaiserModel = FundRaiserModel;

exports.validFundRaiser=(_bodyData)=>{
    let joiSchema=Joi.object({
    target:Joi.number().min(1000, "Your target must be at least 1000$").required,
    groupId:Joi.string().required,
    name:Joi.string().required
    })
    return joiSchema.validate(_bodyData);
    }
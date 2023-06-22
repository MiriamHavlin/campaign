
const Joi = require('joi');
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    target : Number,
    description: String,
    managerId: String
}, {collection: "campaigns"});

const CampaignModel = mongoose.model("groups", campaignSchema);

exports.CampaignModel = CampaignModel;

exports.validcampaign=(_bodyData)=>{
    let joiSchema=Joi.object({
    target:Joi.number().min(50000, "Your target must be at least 50000$").required,
    description:Joi.string().required,
    managerId:Joi.string().required
    })
    return joiSchema.validate(_bodyData);
    }
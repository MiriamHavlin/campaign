
const mongoose = require('mongoose');

const fundRaiserSchema = new mongoose.Schema({
    target : Number,
    groupId: String,
    name: String
});

const fundRaiserModel = mongoose.model("fundRaisers", fundRaiserSchema);

exports.fundRaiserModel = fundRaiserModel;
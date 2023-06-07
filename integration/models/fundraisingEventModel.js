
const mongoose = require('mongoose');

const fundraisingEventSchema = new mongoose.Schema({
    target : Number,
    description: String,
    ManagerId: String
});

const fundraisingEventModel = mongoose.model("groups", fundraisingEventSchema);

exports.fundraisingEventModel = fundraisingEventModel;
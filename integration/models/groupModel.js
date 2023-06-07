


const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    target : Number,
    groupId: String,
    name: String,
    ManagerId: String
});

const groupModel = mongoose.model("groups", groupSchema);

exports.groupModel = groupModel;
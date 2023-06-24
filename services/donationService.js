const myModule = require("../models/donationModel");
const validDonation = myModule.validDonation;
const DonationModel = myModule.DonationModel;

const DonationRepo = require("../repositories/donationRepo");
const Service = require("./service");

const donationRepo = new DonationRepo(DonationModel);

class DonationService extends Service {
    constructor(repo, valid_model) {
        super(repo, valid_model);
        console.log("valid donation: ", valid_model);
    }
}

module.exports = new DonationService(donationRepo, validDonation);
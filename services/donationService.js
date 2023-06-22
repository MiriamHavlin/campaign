const DonationModel = require("../models/donationModel");
const validDonation = require("../models/donationModel");

const DonationRepo = require("../repositories/donationRepo");
const Service = require("./service");

const donationRepo = new DonationRepo(DonationModel);

class DonationService extends Service {
    constructor(repo, valid_model) {
        super(repo, valid_model);
    }
}

module.exports = new DonationService(donationRepo, validDonation);
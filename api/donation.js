const express = require('express');
const router = express.Router();
const DonationService = require('../services/donationService')

router.get('/', async (req, res) => {
    res.send(await DonationService.getAll())
})
router.get(`/:id`, async (req, res) => {
    res.send(await DonationService.getById(req.params.id))
})
router.post('/', async(req, res) =>{
    console.log(req.body);
    res.send(await DonationService.insert(req.body))
})
router.put(`/:id`, async (req, res) => {
    res.send(await DonationService.update(req.params.id, req.body));
})

router.delete(`/:id`, async (req, res) =>{
    res.send(await DonationService.delete(req.params.id));
});

module.exports = router;
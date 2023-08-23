const express = require('express');
const router = express.Router();
const FundRaiserService = require('../services/fundRaiserService')
const logger = require('../middlewares/logger');
const errorMW = require('../middlewares/errors');

router.get('/', async (req, res) => {
    let result = await FundRaiserService.getAll();
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
})

router.get(`/:id`, async (req, res) => {
    let result = await FundRaiserService.getById(req.params.id);
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
})


router.post('/', async (req, res, next) => {
    let result = await FundRaiserService.insert(req.body);
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
});

router.put(`/:id`, async (req, res, next) => {
    if(req.body.roleId == req.params.id){
        let result = await FundRaiserService.update(req.params.id, req.body.data);
        if (result.error) {
            next(result.error)
        }
        else {
            res.send(result);
        }
    }
    else{
        next(new Error("you dont have role to do that"))
    }
});

router.delete(`/:id`, async (req, res) =>{
    let result = await FundRaiserService.delete(req.params.id);
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
});

router.use(errorMW);

module.exports = router;
//a minor change for a commit
const express = require('express');
const router = express.Router();
const groupService = require('../services/groupService');
const logger = require('../middlewares/logger');
const errorMW = require('../middlewares/errors');

router.get('/', async (req, res) => {
    let result = await groupService.getAll();
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
})

router.get(`/:id`, async (req, res) => {
    let result = await groupService.getById(req.params.id);
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
})


router.post('/', async (req, res, next) => {
    let result = await groupService.insert(req.body);
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
});

router.put(`/:id`, async (req, res, next) => {
    if(req.body.roleId == req.body.data.managerId){
        let result = await groupService.update(req.params.id, req.body.data);
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
    let result = await groupService.delete(req.params.id);
    if (result.error) {
        next(result.error)
    }
    else {
        res.send(result);
    }
});

router.use(errorMW);

module.exports = router;
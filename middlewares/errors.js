module.exports = function (err, req, res, next) {
    console.log("res: ", res);
    res.status(500).send('your request can not be completed, please try later...');
}
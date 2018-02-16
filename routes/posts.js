var express = require('express');
var router = express.Router();
var social_netpm = require('social_netpm');

router.post('/',function(req, res) {
    social_netpm.createPost(req.query.token,req.body);
    res.status(201).json({message: 'Post added'});
})

module.exports = router;

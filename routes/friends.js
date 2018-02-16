var express = require('express');
var router = express.Router();
var social_netpm = require('social_netpm');
router.get('/', function(req, res) {
    res.json(social_netpm.getUsers());
})

router.post('/signup',function(req, res) {
    res.json(social_netpm.signUp(req.body));
})
router.get('/tokens', function(req, res) {
    res.json(social_netpm.getTokens());
})
router.put('/:id', function(req, res) {

    social_netpm.sendFriendship(req.params.id,req.query.token); //uso la funzione della libreria fakeProducts
    res.json({message: 'Request sended'});
})
router.put('/check/:id', function(req, res) {

    social_netpm.checkRequest(req.params.id,req.query.token,req.query.answer); //uso la funzione della libreria fakeProducts
    res.json({message: 'Request accepted'});
})
module.exports = router;

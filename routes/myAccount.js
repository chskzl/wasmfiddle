var router = require('express').Router();
var moment = require('moment');

router.get('/myAccount', function(req, res) {

                res.render('myAccount');
            
        
});
module.exports = router;
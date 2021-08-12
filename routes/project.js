var router = require('express').Router();

router.get('/project', function(req, res) {
                res.render('project');
});
module.exports = router;
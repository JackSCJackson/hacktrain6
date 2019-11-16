var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res ) {
  res.render('index', { title: 'Express' });
});


router.get('/about', function(req, res) {
  res.send('test page');
});


router.post('/chat', function(req, res) {
  res.send(req.body.message);
});


module.exports = router;

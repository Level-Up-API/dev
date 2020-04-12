var express = require('express');
var router = express();

router.post('/test', function (req, res) {
  res.send('Got a POST request');
});

module.exports = router;

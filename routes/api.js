var express = require('express');
var router = express.Router();
const API_KEY = require("../config.json")

var request = require('axios');

router.get('*', function (req, res, next) {
  var url = `https://api.propublica.org/congress/v1/bills/search.json?query=${req.url}`;

  let requestObj = {
    method: req.method,
    url: url,
    headers: { "X-API-KEY": API_KEY.key }
  };

  if (req.method !== 'GET') requestObj.data = req.body;

  request(requestObj)
  .then(result => {
    return res.json(result.data);
  })
  .catch(err => next(err));
});

module.exports = router;

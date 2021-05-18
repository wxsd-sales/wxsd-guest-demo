// routes/index.js

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(`/`, function (req, res, next) {
  //res.render('index', { title: 'Auth0 Webapp sample Nodejs' });
  res.redirect(process.env.BASE_URL+`/${process.env.MY_ROUTE}/linkgen`);
});

module.exports = router;

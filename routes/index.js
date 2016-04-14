var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var conn = mysql.createConnection({

  host:'112.74.83.167',
  user:'root',
  password:'',
  database:'mysql',
  port:'3306'
});
conn.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  conn.query('select  count(*) as countSize from  user   ',function (err,rows,fields){

    if (err) {
      throw err;
    };
    console.log('the solution is:',rows[0].countSize);
    res.render('indexhuhu', { title: 'Express' });

  })

});

module.exports = router;

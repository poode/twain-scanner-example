
var express = require('express');
var router = express.Router();
const { exec } = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/",(req,res)=> {
  exec('cmd',(err, stdout,stderr)=> {
    if(err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
});
router.post("/scan",(req,res)=> {
  exec('powershell',(err, stdout,stderr)=> {
    if(err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
});
module.exports = router;

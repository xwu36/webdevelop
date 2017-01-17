var express = require('express');
var router = express.Router();
var Algorithms = require('../models/algorithms');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET algorithms page. */
router.get('/problems/algorithms/:i', function(req, res, next){
  //res.send('algorithms');
  Algorithms.find( function(err, docs){
  	if(err)
  		redirect('error');
  	else{
  		var chunks = [];
  		var chunkSize = 30;
  		var pagenumber = (req.params.i - 1) * chunkSize;
      res.locals.pageNumberGlobal = req.params.i;
      console.log(res.locals.pageNumberGlobal);
  		var pages = Math.floor(docs.length/chunkSize) + 1;

  		chunks.push(docs.slice(pagenumber, pagenumber + chunkSize));
  	  res.render('problems/algorithms', { chunks : chunks, pages : pages, pagenumber : req.params.i });
    }
  });
});

/* GET algorithms page. */
router.get('/problems/tackle-view/:algorithmsId', function(req, res, next){
  //res.send('algorithms');
  var algorithmsId = req.params.algorithmsId;
  Algorithms.findById(algorithmsId, function(err, docs){
  	if(err)
  		res.redirect('error');
  	else
  		res.render('problems/tackle-view', { algorithms : docs });
  });
});

module.exports = router;
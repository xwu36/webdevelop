var express = require('express');
var router = express.Router();
var Algorithms = require('../models/algorithms');
var fs = require('fs');
var spawn = require('child_process').spawn;

/* GET algorithms page. */
router.get('/algorithms/:i', function(req, res, next){

  Algorithms.find( function(err, docs){
  	if(err)
  		redirect('error404');
  	else{
  		var chunks = [];
  		var chunkSize = 30;
  		var pagenumber = (req.params.i - 1) * chunkSize;
  		if(req.params.i)
        	req.session.pageNumberGlobal = req.params.i;
  		var pages = Math.floor(docs.length/chunkSize) + 1;

  		chunks.push(docs.slice(pagenumber, pagenumber + chunkSize));
  	  res.render('problems/algorithms', { chunks : chunks, pages : pages, pagenumber : req.params.i });
    }
  });
});

/* GET algorithms page. */
router.get('/tackle-view/:algorithmsId', function(req, res, next){

  var algorithmsId = req.params.algorithmsId;
  var codeTextarea = req.flash('codeTextarea');
  var stderr = req.flash('stderr');
  var hasStderr = req.flash('hasStderr');

  Algorithms.findById(algorithmsId, function(err, docs){
  	if(err)
  		res.redirect('error404');
  	else if( !hasStderr )
      res.render('problems/tackle-view', { algorithms : docs, stderr : [], codeTextarea : codeTextarea.join("\n") } );
    else
      res.render('problems/tackle-view', { algorithms : docs, stderr : stderr, codeTextarea : codeTextarea.join("\n") } );
  });
});

/* POST algorithms page. */
router.post('/tackle-view', function(req, res, next){

  codeTextarea = req.body.codeTextarea.split('\n');
  req.flash('codeTextarea', codeTextarea);
  
  fs.writeFile('./temp.c', req.body.codeTextarea, function(err){

    var result = [];
    if(err)
      return res.redirect('index');
    else if(fs.existsSync('./temp.c')){

      var spawn = require('child_process').spawn;
      var compile = spawn('gcc', ['temp.c']);

      compile.stdout.on('data', function (data) {
        console.log('stdout: ' + data.toString()); 
      });

      compile.stderr.on('data', function (data) {

        if(data){

          var stderr = data.toString();
          result.push(stderr);

          /*var stderr10 = stderr.substring(0, 10);
          var checkflag = "temp.c: In";
          if(checkflag == stderr10 && i == 1){
            console.log('1');
            //res.end();           
          }else if(checkflag != stderr10 && i == 1){
            req.flash('stderr', result);
            console.log('2');
            res.redirect('/problems/tackle-view/' + req.body.problemId); 
            res.end();         
          }else if(checkflag != stderr10 && i == 2){
            req.flash('stderr', result);    
            console.log('3');          
            res.redirect('/problems/tackle-view/' + req.body.problemId); 
            res.end();         
          }else{
            i = 0;
            console.log('4');
            res.end();
          }*/
        }
      }, function(){

      });
      
      compile.on('close', function (code) {  
        console.log('child process exited with code' + code.toString());
      });

      setTimeout(function(){
        if(result.length > 0){
          req.flash('stderr', result);
          req.flash('hasStderr', true);
        }else{
          req.flash('hasStderr', false);
        }
        console.log(result);
        return res.redirect('/problems/tackle-view/' + req.body.problemId); 
      }, 200)
    }

  });

});

module.exports = router;
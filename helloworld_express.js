var express = require('express');
var app = express();
//Route
app.get('/', function(req, res){
   res.send("Hello world!");
});
//Listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port,function(){
console.log('Listening on localhost:'+ port);
});

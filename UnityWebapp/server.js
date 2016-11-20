var express = require('express');
var path = require('path');
var app = express();

app.set('port',8080)


app.use(express.static(path.join(__dirname+ '/public')));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})

app.listen(8080);
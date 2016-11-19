var http = require('http'); //the variable doesn't necessarily have to be named http
http.createServer(function(req, res) {});
var url = 'http://localhost:8000/';
var myNet = new Architect.Perceptron(5, 3, 1);
var trainingSet = [];

http.get(url, function(res){
    var body = '';

    //res.on('data', function(chunk){
    //    body += chunk;
    //});

    res.on('end', function(){
        var data = JSON.parse(body);
        console.log("Got a response");
        var inputvec = [];
               if data.format = "desktop"{
                    inputvec.push(0,0,1);
                }
                else if data.format = "app"{
                    inputvec.push(0,1,0);
                }
                else {
                  inputvec.push(0,0,1);
                  } 
                
                if data.platform = "banner"{
                    inputvec.push (1);
                }
                else{
                    inputvec.push (0);
                }
                
                inputvec.push(((data.timestamp)/60/60/24)%24);
                
                var outputvec = [];
                outputvec.push(1/(1+exp(-data.impressions/2000)));

                trainingSet.push({input = inputvec, output = outputvec});
                console.log("complete")
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});

var trainingOptions = {
rate: .1,
iterations: 20000,
error: .005,
}

myNet.trainer.train(trainingSet, trainingOptions);
console.log(myNet);
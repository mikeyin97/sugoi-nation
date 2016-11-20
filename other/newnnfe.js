var http = require('http');
var synaptic = require('synaptic');
var jsonfile = require('jsonfile');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;
http.createServer(function (req, res) { });
var url = 'http://localhost:8000/impressions?dc=NA';
var myNet = new Architect.Perceptron(5, 3, 1);
var trainingSet = [];
var trainingOptions = {
    rate: .1,
    iterations: 20000,
    error: .005,
};
var file = 'C:\Users\\Michael\\Documents\\GitHub\\sugoi-nation\\other\\test2.json'

var url = 'http://localhost:8000/impressions?dc=NA';

var trainingSet = [
  {
    input: [0,0,1,0.12,0,0,0,0,1,1],
    output: [1]
  },
  {
    input:  [0,1,0,0.045,0,0,1,1,0,0],
    output: [0]
  },
  {
    input:  [1,0,0,0.42,1,1,0,0,0,0],
    output: [1]
  }
]

var trainingOptions = {
  rate: .1,
  iterations: 20000,
  error: .005,
}

myNet.trainer.train(trainingSet, trainingOptions);
var exported = myNet.toJSON();
        jsonfile.writeFile(file, exported, function (err) {
            console.error(err)
        })

http.get(url, function (res) {
    var body = '';

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        var data = JSON.parse(body);
        
        
        for (var i in data.data) {
            var inputvec = [];
            var outputvec = [];
            if (data.data[i].format == "desktop") {
                inputvec.push(0, 0, 1);
            }
            else if (data.data[i].format == "app") {
                inputvec.push(0, 1, 0);
            }
            else {
                inputvec.push(0, 0, 1);
            }

            if (data.data[i].platform == "video") {
                inputvec.push(1);
            }
            else {
                inputvec.push(0);
            }

            inputvec.push(((parseFloat(data.data[i].timestamp) / 60 / 60 / 24) % 24)/24);
            //console.log(((parseFloat(data.data[i].timestamp) / 60 / 60 / 24) % 24)/24);
            outputvec.push(1 / (1 + Math.exp(-data.data[i].impressions / 5000)));
            //console.log(1 / (1 + Math.exp(-data.data[i].impressions / 5000)));
            //console.log(inputvec);
            trainingSet.push({input: inputvec,output: outputvec});
            //console.log(trainingSet);
        }

        
        // console.log("TRAINING!");
        // 
        console.log("training!")
        myNet.trainer.train(trainingSet, trainingOptions);
        console.log(myNet);
        impressions = -5000*Math.log(1/(myNet.activate([0,0,1,1,8]))-1);
        console.log(impressions);
        var exported = myNet.toJSON();
        jsonfile.writeFile(file, exported, function (err) {
            console.error(err)
        })
    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
});




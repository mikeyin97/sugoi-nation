var appended = $('<div />').text("You're appendin'!");
appended.id = 'appended';
var url = 'http://localhost:3000/';
var myNet = new Architect.Perceptron(5, 3, 1);
var trainingSet = [];

$(document).ready(function(){
    $('input:radio[name="display"]').change(
    function(){
        if ($(this).val() == 'a') {
            $('#video').css('background-image','url(em2AYOL.gif)');
        }
        else if ($(this).val() == 'b'){
            $('#video').css('background-image','url(ezgif-2507893654.gif)');
        }
        else{
            $('#video').css('background-image','url(ughhh.PNG)');
        }
    });
    /*

    $.getJSON("http://localhost:3000/", {},
    function (data) {
        $.each(data.items, 
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
              );
    });

    var trainingOptions = {
    rate: .1,
    iterations: 20000,
    error: .005,
    }

    myNet.trainer.train(trainingSet, trainingOptions);
    console.log(myNet);
    */
});
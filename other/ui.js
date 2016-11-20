var appended = $('<div />').text("You're appendin'!");
appended.id = 'appended';
var url = 'http://localhost:3000/';


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
   
});
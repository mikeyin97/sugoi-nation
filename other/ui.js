
var url = '';


$(document).ready(function(){
    $('input:radio[name="display"]').change(
    function(){
        if ($(this).val() == 'a') {
            $('#video').css('background-color','green');
        }
        else if ($(this).val() == 'b'){
            $('#video').css('background-color','blue');
        }
        else{
            $('#video').css('background-color','red');
        }
    });
    $("#submit").click(function(){
        
        //$.ajax({url: "http://localhost:3000/", success: function(result){
        //    $("#header").html(result);
        //}});
        return false;
    });
   
});
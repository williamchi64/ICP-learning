// jQuery
// $(css selector).action()
// original
document.getElementById('test-jquery');
// jQuery
$(document).ready(function(){
    $('#test-jquery').click(function(){
        console.log('hello jQuery');
        alert('hello jQuery');
    });
});
// event
$(function(){
    $('#mouselocation').mousemove(function(e){
        $('#mouse1').text('x:'+e.pageX + 'y:'+e.pageY);
    });
});
// edit DOM
$(function(){
    $('#test-ul li[name=js]').text('edited js');
    $('.java').css({'color':'red'});
    $('#rust').hide();
});

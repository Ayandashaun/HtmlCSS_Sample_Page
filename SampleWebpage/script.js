$(document).ready(function(){
    $('#menu_bar').click(function(){

        $('#menu').addClass('menu-visible');   
    })

    $('#menu_close').click(function(){

        $('#menu').removeClass('menu-visible');  
    })

    $('.amp').parent().css("background-color:black");
    
    });



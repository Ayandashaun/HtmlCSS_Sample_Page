document.getElementById("basis2").innerHTML += "<br /> <hr />";
document.getElementById("basis3").innerHTML += "<br /> <hr />";

var menu = getElementById("menu_bar");
var menuelement = getElementById("menu");


    menu.onclick = function (){showMenu()};
    
    function showMenu()
    {
        menuelement.classList.remove('menu');
        menuelement.classList.add('menu-visible');
        menuelement.classList.add('menu_hidden');
    }


//menu.addEvenListener('click', showMenu());
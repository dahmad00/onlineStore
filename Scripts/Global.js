document.getElementById("check").style.display="none";

var hide = document.getElementsByClassName("hide-on-search");
var show = document.getElementsByClassName("show-on-search");

document.getElementById("search-icon-top").onclick = function() {
    for(var i = 0; i < hide.length; i++) 
    {
        hide[i].style.display = "none";
    }

    document.getElementById("search-close-icon").style.display = "block";

    for(var i = 0; i <show.length; i++)
    {
        show[i].style.display = "block";
    }

}

document.getElementById("search-close-icon").onclick = function() {
    for(var i = 0; i < hide.length; i++) 
    {
        hide[i].style.display = "block";
    }
    
    document.getElementById("search-close-icon").style.display = "none";
    
    for(var i = 0; i <show.length; i++)
    {
        show[i].style.display = "none";
    }
}

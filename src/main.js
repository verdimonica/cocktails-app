// Opening and closing menu on burguer click
var openMenu = function(){
    el = document.getElementsByTagName("aside")[0];
    el.style.display = "block";
    document.getElementById("burguer-menu").style.display = "none";
}

var closeMenu = function(){
    el = document.getElementsByTagName("aside")[0];
    el.style.display = "none";
    document.getElementById("burguer-menu").style.display = "inline";
}

document.getElementById("burguer-menu").addEventListener("click", openMenu);
document.getElementById("aside-logo-mb").addEventListener("click", closeMenu);


//faq section

  //search page
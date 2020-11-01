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
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
$(".open").click( function () {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");
    
    answer.slideToggle(200);
    
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    }
    else {
      trigger.addClass("faq-o");
    }
    
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    }
    else {
      container.addClass("expanded");
    }
  });


  //search page
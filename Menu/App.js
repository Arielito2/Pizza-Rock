$("text").append("<div class='glitch-window'></div>");
//fill div with clone of real header
$( "h1.textins" ).clone().appendTo( ".glitch-window" );
const botonBar = document.getElementsByClassName('barraburger')[0]
const navBar = document.getElementsByClassName('contenedorlinks')[0]

botonBar.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})

// $("text").append("<div class='glitch-window'></div>");
// //fill div with clone of real header
// $( "h1.textins" ).clone().appendTo( ".glitch-window" );
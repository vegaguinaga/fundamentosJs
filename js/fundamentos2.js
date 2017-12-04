 //DECLARACION DE OBJETOS Y VARIABLES
 var boton = document.getElementById("boton");
 var boton2 = document.getElementById("boton2");

 //DECLARACION DE FUNCIONES
 function eventoClick(evento)
 {
 	//alert("Has presionado el boton");
 	alert("Has presionado el botón en el evento '" + evento.type + "' con el objeto de nombre id '" + evento.target.id +"'");
 	console.log(evento);

 	evento.target.style.borderRadius = '1em';
 	evento.target.style.fontSize = "2em";
 }

 // ASIGNACION DE EVENTOS
 //Los manejadores de eventos semanticos se ejecutan a la carga del documento

 window.onload = function(){
 	boton.onclick = eventoClick;
 }
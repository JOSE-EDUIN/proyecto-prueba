function Inicio(){ 
    alert("Actualmente se encuentra en la pagina de inicio.");
}
function Regreso_inicio(){ 
    alert("Sera redirigido a la pagina de incio");
}
function formulario(){ 
    alert("Sera redirigido a la pagina del formulario");
}

function actual() {
    fecha=new Date();
    hora=fecha.getHours();
    minuto=fecha.getMinutes();
    segundo=fecha.getSeconds();
    if (hora<10) {
       hora="0"+hora;
       }
    if (minuto<10) {
       minuto="0"+minuto;
       }
    if (segundo<10) {
       segundo="0"+segundo;
       }

    mireloj = hora+" : "+minuto+" : "+segundo;	
            return mireloj; 
    }
function actualizar() {
mihora=actual();
mireloj=document.getElementById("reloj");
mireloj.innerHTML=mihora;
}
setInterval(actualizar,1000);

function cambiarColor( color ) {
    var elemento = document.getElementById('parrafo');
    elemento.style.font = 'bold italic 16 pt Verdana';
    elemento.style.color = color;
}

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color";
}

function copiarAlPortapapeles(hexadecimal) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(hexadecimal).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	document.getElementById("text").innerHTML = "Copiado!";
}

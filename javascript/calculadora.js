function suma(){
	var numero1 = parseFloat(document.getElementById('numero1').value);
	var numero2 = parseFloat(document.getElementById('numero2').value);
	var resultado = numero1 + numero2;

	document.getElementById('resultado').value = resultado;
}


function resta(){
	var numero1 = parseFloat(document.getElementById('numero1').value);
	var numero2 = parseFloat(document.getElementById('numero2').value);
	var resultado = numero1 - numero2;

	document.getElementById('resultado').value = resultado;
}

function multiplicacion(){
	var numero1 = parseFloat(document.getElementById('numero1').value);
	var numero2 = parseFloat(document.getElementById('numero2').value);
	var resultado = numero1 * numero2;

	document.getElementById('resultado').value = resultado;
}

function division(){
	var numero1 = parseFloat(document.getElementById('numero1').value);
	var numero2 = parseFloat(document.getElementById('numero2').value);
	var resultado = numero1 / numero2;

	document.getElementById('resultado').value = resultado;
}


function SoloNumeros(evt)
{
if(window.event){
keynum = evt.keyCode;
}
else{
keynum = evt.which;
}

if((keynum > 47 && keynum < 58) || keynum == 8 || keynum== 13 || keynum == 46)
{
return true;
}
else
{
alert("Ingresar solo numeros");
return false;
}
}

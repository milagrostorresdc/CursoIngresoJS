/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	var num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	var suma=num1+num2

	alert("la suma es: " +suma);	
}

function restar()
{
	var num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	var num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	var resta=num1-num2

	alert("la resta es: " +resta);
}

function multiplicar()
{ 
	var num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	var num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	var multiplicar=num1*num2

	alert("la multiplicación es: " +multiplicar);
}

function dividir()
{
	var num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	var num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	var división=num1/num2

	alert("la división es: " +división);
}


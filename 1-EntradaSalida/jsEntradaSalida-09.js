/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*function mostrarAumento()
{
 var sueldo;
 var sueldoFinal;
 var aumento;
 

 sueldo= parseInt(document.getElementById("txtIdSueldo").value);
 aumento = sueldo * .1 ;
 sueldoFinal = sueldo + aumento;
 document.getElementById("txtIdResultado").value = sueldoFinal;
 
}
*/
/*9 bis*/

function mostrarAumento()
{

var sueldo = parseInt(document.getElementById("txtIdSueldo").value);
var aumento = prompt ("Ingresar aumento")
var porcentaje = (aumento * sueldo) / 100;
document.getElementById("txtIdResultado").value = sueldo + porcentaje;


}
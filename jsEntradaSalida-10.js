/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/* function mostrardescuento()
{
 var importe;
 var descuento;
 

 importe= parseInt(document.getElementById("txtIdImporte").value);
 descuento = (25 * importe) / 100 ;
 document.getElementById("txtIdResultado").value = importe - descuento;

}
*/

/*10 bis*/

function mostrardescuento()
{

var importe = parseInt(document.getElementById("txtIdImporte").value);
var porcentaje = prompt ("Ingresar porcentaje")
var descuento = (porcentaje * importe) / 100;
document.getElementById("txtIdResultado").value = importe - descuento;


}
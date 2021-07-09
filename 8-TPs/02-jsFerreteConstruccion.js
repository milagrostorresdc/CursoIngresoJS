/*
AUTOR: TORRES DEL CASTILLO MILAGROS DE LOS ÁNGELES
ENUNCIADO: TP 2
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoDelTerreno
    var anchoDelTerreno
    var rectangulo
    var alambre

    largoDelTerreno=parseInt(document.getElementById("txtIdLargo").value);
    anchoDelTerreno=parseInt(document.getElementById("txtIdAncho").value);
    rectangulo=(largoDelTerreno+anchoDelTerreno)*2;
    alambre=rectangulo*3;

    alert("Cantidad de alambre a usar: " + alambre)


}
function Circulo () 
{
    var circulo
    var alambre
    var radio
    conts PI = 3.14;

    radio=parseInt(document.getElementById("txtIdRadio").value);
    circulo= 2 * PI * radio;
    alambre=circulo*3;
    alert(alambre)
}
function Materiales () 
{
	
}
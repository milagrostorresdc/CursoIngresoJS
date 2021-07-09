/*
AUTOR: TORRES DEL CASTILLO MILAGROS DE LOS ÁNGELES
ENUNCIADO: parcial 2019 ejercicio 2

A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/
function mostrar()
{
  var nombre1
  var nombre2
  var peso1
  var peso2
  var kgTotales
  var promedioPeso
  var mensaje

  nombre1=prompt("Usted se llama");
  nombre2=prompt("Usted se llama");
  peso1=parseInt(prompt("Pesa") );
  peso2=parseInt(prompt("Pesa") );
  kgTotales=parseInt(peso1+peso2);
  promedioPeso=parseInt(kgTotales/2)

  mensaje="Ustedes se llaman ";
  mensaje=mensaje+nombre1+" y "+nombre2;
  mensaje=mensaje+" pesan ";
  mensaje=mensaje+peso1+" kg y "+peso2;
  mensaje=mensaje+" kg, que en total son ";
  mensaje=mensaje+kgTotales;
  mensaje=mensaje+" kgs y el promedio de peso es ";
  mensaje=mensaje+promedioPeso+" kgs."

  alert(mensaje)
  




}

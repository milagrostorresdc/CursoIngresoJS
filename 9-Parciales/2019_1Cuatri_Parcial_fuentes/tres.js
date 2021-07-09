/*
AUTOR: TORRES DEL CASTILLO MILAGROS DE LOS ÁNGELES
ENUNCIADO: parcial 2019 ejercicio 3
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/
function mostrar()
{
   var precioInicial
   var descuento
   var mensaje
   var precioFinal

   precioInicial=prompt("Ingrese precio");
   precioInicial=parseFloat(precioInicial);
   descuento=prompt("Ingrese descuento");
   descuento=parseFloat(descuento);
   descuento=(descuento/100);
   precioFinal=precioInicial*descuento;
   precioFinal=precioInicial-precioFinal;
   mensaje="El precio final es ";
   mensaje=mensaje+precioFinal;
   mensaje=mensaje+" pesos";

   precioFinal=document.getElementById("elPrecioFinal").value=mensaje;

}

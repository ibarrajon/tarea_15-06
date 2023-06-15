//ejercicio 1
//let num=7;

// if ((num/2)==0){
//     console.log("El número " + num + " es par");
// }else{
//     console.log("El número " + num + " es impar");
// }

//ejercicio 2
// let num=-7;

// if (num>0){
//     console.log("El número " + num + " es positivo");
// }else{
//     console.log("El número " + num + " es negativo");
// }

//ejercicio 3
// let cadena="destornillador";

// if (cadena.length>10){
//     console.log("Largo");
// }else{
//     console.log("Corto");
// }


//-------Arrays--------
//ejercicio 1
// let array=[1,2,3,4,5,6,7,8,9,10];

// for (i=1;i<array.length;i++){
//     console.log(array[i])
// }

//ejercicio 2
// let nodo; 
// let arrayAmigos=["fernando","jonhatan","francisco"];

// lista=document.getElementById("listaAmigos");

// for (i=0;i<arrayAmigos.length;i++){
//   nodo= document.createElement('li');
//   nodo.appendChild(document.createTextNode(arrayAmigos[i]));
 
//   document.querySelector('ul').appendChild(nodo);
// }

// ejercicio 3
// let arrayEdades=[4,32,36,33,61,56];
// let suma=0;
// let promedio;

// for (i=0;i<arrayEdades.length;i++){
//   suma+=arrayEdades[i];
// }

// promedio=suma/arrayEdades.length;

// console.log(promedio);


//-------Bucle for con arrays--------
//ejercicio 1
// let arrayColores=["azul","amarillo","negro","verde","gris"];

// for (i=0;i<arrayColores.length;i++){
//     console.log(arrayColores[i])
// }


//ejercicio 2
// let nodo; 
// let arrayFrutas=["manzana","frutilla","banana","ciruela","durazno"];

// for (i=0;i<arrayFrutas.length;i++){
//   nodo= document.createElement('li');
//   nodo.appendChild(document.createTextNode(arrayFrutas[i]));
 
//   document.querySelector('ul').appendChild(nodo);
// }

// ejercicio 3
// let array = [1, 4, 6, 7, 20, 18];
// let menor,pos,cant;
// let arrayOrdenado=[];

// cant=array.length;

// for (i=0;i<cant;i++){
//   menor=array[0];

//   for (x=0;x<array.length;x++){
//     if (array[x]<=menor){
//       menor=array[x];
//       pos=x;    
//     }
//   }

//   arrayOrdenado.push(menor);
//   array.splice(pos,1);
// }

// console.log(arrayOrdenado)

//-------Funciones--------
//ejercicio 1
// function sumarNumerosPares(n){
//   var suma=0;

//   for (i=0;i<=n;i++){
//     if ((i%2)==0){
//       suma+=i;
//     }
//   }

//   return suma;
// }

// console.log(sumarNumerosPares(6));

//ejercicio 2
// function calcularImpuestos(monto){
//   var impuesto1=20;
//   var impuesto2=10;
//   var impuesto;

//   if (monto>=1000){
//     impuesto=(monto*impuesto1)/100;
//   }else{
//     impuesto=(monto*impuesto2)/100;
//   }

//   return impuesto;
// }

// console.log(calcularImpuestos(1500));

//ejercicio 3
// function contarVocales(cadena){
//   var vocales=["a","e","i","o","u"];
//   var cantVocales=0;

//   for (i=0;i<cadena.length;i++){
//     for (x=0;x<vocales.length;x++){
//       if (cadena[i]===vocales[x]){
//         cantVocales+=1;
//       }
//     }
//   }

//   return cantVocales;
// }

// let cadena="javascript";

// console.log("La cantidad de vocales de " + cadena + " es " + contarVocales(cadena));

//ejercicio 4
// function generarContraseña(longitud){
//   var aleatorio; 
//   var clave="";

//   for (i=0;i<longitud;i++){
//     aleatorio=Math.random()*128;

//     clave+=String.fromCharCode(aleatorio)
//   }

//   return clave;
// }

// console.log(generarContraseña(8));
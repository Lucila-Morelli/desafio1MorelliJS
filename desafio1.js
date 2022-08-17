/* Buenas. La idea del proyecto final es hacer una página de una heladeria, donde se elige el pote o cucurucho y dependiendo de la elección la cantidad de gustos que entran en cada uno. 
En el html crear un menu despegable, luego la cantidad de opción que hay, cucuruchos, 1/4, 1/2, 3/4, kilo. y por debajo la lista de todos los sabores que hay.
 Que el usuario tenga la opción de elegir retirar por el local o delivery. 
 Espero que al avanzar con las clases poder mejorar y sumarle más cosas 

*/



console.log ("Bienvenido a Heladeria Theo");

alert("Dentro del pote podes poner cuatro sabores");
alert("Dentro de los cucuruchos podes poner dos sabores");

 let cantidad_sabores = prompt("Ingrese la cantidad de sabores o SALIR");

while (cantidad_sabores !== "SALIR"){


if(cantidad_sabores <= 2){
    alert("Podes elegir el cucurucho ");
}
else if(cantidad_sabores <= 4){
    alert("Podes elegir: 1/4 , 1/2, 3/4 o kilo");
}
else{ 
    alert("El numero maximo de sabores que se puede pedir es 4");
};

 
/*Con esta función tuve problemas, no se si la resolvi bien*/

let producto = prompt("Ingrese el nombre del producto");
let precio_producto = parseInt(prompt("Ingrese el precio del producto"));
let precio_delivery= parseInt(prompt("Ingrese el precio del delivery"));
let salir = prompt("Ingrese SALIR para finalizar")
function precio_total(precio){
    let total = precio + precio_delivery
    return total
}

console.log("Nombre " , producto);
console.log("Precio " , precio_producto);
console.log("Precio " , precio_delivery);

total_mas_delivery = precio_producto + precio_delivery;
console.log("El total del helado mas el delivery es de " , total_mas_delivery);

if (total_mas_delivery >= 1000){
    alert("Puede pedir delivery");
    
}

else if (total_mas_delivery < 1000){
    alert("se debe retirar por local, supera los mil o te esperamos en el local");
}

}


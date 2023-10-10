let marca = prompt("Que marca de zapatillas esta buscando? Nike o Adidas")

if (marca === "adidas" || "nike"){
    alert("Bienvenido a Hood Sneaks");
}else{
    alert("No tenemos esa marca");
}
let modelo = prompt("Que modelo estas buscando?")
switch(modelo){
    case "jordan":
        alert("Las Jordan tienen un valor de usd200");
        break;
     case "air force":
        alert("Las Air Force tienen un valor de usd100 ");
        break;
    default:
        alert("No tenemos ese modelo");
        break;
}

let precio = Number(prompt("Ingrese el precio de sus zapatillas para calcular el valor final"))
let iva = 0.21;

function precioFinal(){
    let resultado = precio + iva;
    return resultado;
}
alert(precioFinal());


   
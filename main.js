alert("Bienvenido a Hood Sneaks");

class Calzados {
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}


const productosNike = [];

productosNike.push(new Calzados("nike", "air force one", 500 ));
productosNike.push(new Calzados("nike", "air max", 100 ));
productosNike.push(new Calzados("nike", "air jordan", 1000 ));

const productosAdidas = [];

productosAdidas.push(new Calzados("adidas", "forum bad bunny", 1000));
productosAdidas.push(new Calzados("adidas", "yeezy", 500 ));

const airForce = new Calzados("nike", "air force one", 500);
const airMax = new Calzados("nike", "air max", 100 );
const jordan = new Calzados("nike", "jordan", 1000 );
const badBunny = new Calzados("adidas", "forum bad bunny", 1000);
const yeezy = new Calzados("adidas", "yeezy", 500)



let marca = prompt("Que marca de zapatillas esta buscando? Nike o Adidas");
if (marca === "nike"){
    for(const item of productosNike){
        alert(item.modelo);
    
    }
   
}else if(marca === "adidas"){
    for(const item of productosAdidas)
    alert(item.modelo);
}else{
    alert("No tenemos esa marca");
}


let modelo = prompt("Que modelo estas buscando?")
switch(modelo){
    case "air jordan":
        alert('Las Jordan tienen un valor de usd1000');
        break;
    case "air force one":
        alert('Las Air Force One tienen un valor de usd500');
        break;
    case "air max":
        alert('Las Air Max tienen un valor de usd100');
        break;
    case "forum bad bunny":
            alert('Las Forum Bad Bunny tienen un valor de usd1000');
        break;
    case "yeezy":
            alert('Las Yeezy tienen un valor de usd500');
        break;
    default:
        alert("No tenemos ese modelo");
        break;
}



let precio = Number(prompt("Ingrese el precio de sus zapatillas para calcular el valor final"))
let iva = 0.21;

function precioFinal(){
    let resultado = precio * iva;
    return resultado;
}

  
    
    let carrito = prompt("Desea finalizar la compra?")
   switch(carrito){
    case "si":
        alert(precioFinal());
        break;
    default:
        break;
   }

   class carritoFinal  {
    constructor(nombre){
        this.nombre = nombre;
    }
 

   }
   
   cantidad = prompt("Ingrese el o los modelos que quiere");
   carritoFinal.push(cantidad);

 alert(carritoFinal.nombre);


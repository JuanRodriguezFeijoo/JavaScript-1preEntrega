let nombre = prompt ('Ingresá tu nombre.')

let cantidad = prompt (' Bienvenido ' + nombre + ', ingresa la cantidad de productos que planea comprar')
let dinero = prompt ( ' ingrese cuanto dinero tiene disponible para gastar')
let total = 0
let valor = 0

for ( let i = 1 ; i <= cantidad ; i++ ) {
let valor = parseInt(prompt ('Ingresá el costo del producto'))
total = total+valor
}

if ( total <= dinero ) {
    alert (nombre + ' Puede continuar con el Check Out, su total es de ' + total )
}
else {
    alert ( nombre + ' Lamentamos informarte que sus compra es de ' + total + ' y supera el monto cargado ' )
}

/**
 * Clase 1, 31/08/2018
 */

// variables, funciones, closures
let vehiculo = {
    velocidad: 10
}

function seleccionarVehiculo(vehiculo) {
    return {
        acelerar: function acelerar(velocidad) {
            vehiculo.velocidad = vehiculo.velocidad + velocidad;
        },
        frenar: function frenar() {
            vehiculo.velocidad = 0;
        }
    }
}

let conductor = seleccionarVehiculo(vehiculo);

conductor.acelerar(10);

console.log(vehiculo.velocidad);

conductor.frenar();

console.log(vehiculo.velocidad);


// Objetos
function Conductor(nombre, apellidos, edad, vehiculo) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.vehiculo = vehiculo;
}

Conductor.prototype.acelerar = function (velocidad) {
    this.vehiculo.velocidad += velocidad;
}

Conductor.prototype.frenar = function () {
    this.vehiculo.velocidad = 0;
}

let cristobal = new Conductor('Cristobal', 'Garcia', 20, vehiculo);

cristobal.acelerar(10);

console.log(cristobal.vehiculo);

cristobal.frenar();

console.log(cristobal.vehiculo);

function adios() {
    console.log('Adios')
}

function hola(adios) {
    console.log('Hola!')
    adios();
}

hola(adios);

// Promises

function getPeliculas(count) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (count !== 0) {
                reject({
                    statusCode: 400,
                    message: 'Error'
                })
            }
            resolve([
                {
                    id: 1,
                    name: 'Anabelle'
                },
                {
                    id: 2,
                    name: 'Increibles'
                },
                {
                    id: 3,
                    name: 'Forestgam'
                }
            ]);
        }, 1000);

    })
}

getPeliculas(0).then(function (response) {
    console.log(response);
    //
}).catch(function (error) {
    console.log(error)
})

getPeliculas(1).then(function (response) {
    console.log(response);
    //
}).catch(function (error) {
    console.log(error)
})

// Arrays y bucles

 let listaDeAmigos = [
    'Ruben',
    'Cristobal',
    'Alvaro',
    'Jose'
]
/*

for (let i = 0; i < listaDeAmigos.length; i++) {
    let amigo = listaDeAmigos[i];
    console.log(amigo)
} */

listaDeAmigos.forEach(function (element, index, array) {
    console.log(element);
});

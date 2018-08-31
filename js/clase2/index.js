/**
 * ES6
 */

/* function saludar() {
    console.log(this.name);
}


saludarARuben();
 */
'use strict';


this.ruben = 'Ruben';

let saludar = () => {
    console.log(this.ruben)
}

saludar();

// Template literals
console.log(`Hola nkjnjk ${this.ruben} donjdnsj ${1}`);


// Objetos ES6

class Conductor {
    constructor(nombre, apellidos, edad, vehiculo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.vehiculo = vehiculo;
    }

    acelerar() {
        this.vehiculo.velocidad += velocidad;
    }

    frenar() {
        this.vehiculo.velocidad = 0;
    }
}

// Promises
/* Explicar con Babel
async function getPeliculas(count) {
    setTimeout(function () {
        if (count !== 0) {
            return {
                statusCode: 400,
                message: 'Error'
            }
        }
        return [
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
        ];
    }, 1000);

}

async function obtenerPeliculas() {
    try {
        let peliculas = await getPeliculas(0);

        let errorpeliculas = await getPeliculas(1);

        return {
            peliculas: peliculas,
            errorpeliculas: errorpeliculas
        }
    } catch (err) {
        throw err;
    }
}

obtenerPeliculas().then((response) => {
    console.log(response)
}).catch((err) => console.log(err))



obtenerPeliculas().then((response) => {
    console.log(response)
}).catch((err) => console.log(err))
 */

let map = new Map();

map.set(1, 'Ruben')
map.set('12345678A', 'Cristobal')

console.log(map.get('12345678A'))


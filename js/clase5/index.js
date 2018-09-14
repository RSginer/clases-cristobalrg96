"use strict";
exports.__esModule = true;
var Coche = /** @class */ (function () {
    function Coche(modelo, motor, potencia) {
        this.modelo = modelo;
        this.motor = motor;
        this.potencia = potencia;
    }
    Coche.prototype.acelerar = function (velocidad) {
    };
    return Coche;
}());
exports.Coche = Coche;
new Coche();

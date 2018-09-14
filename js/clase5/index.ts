import { IVehiculo } from './vehiculo.interface';

export class Coche implements IVehiculo{
    modelo: string;
    motor: string;
    potencia: number;

    constructor(modelo?: string, motor?: string) {
        this.modelo = modelo;
        this.motor = motor;
    }

    acelerar(velocidad: number): void {

    }
}

new Coche();
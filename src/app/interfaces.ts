import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface IProducto{

    "nombre": string,
    "descripcion": string,
    "categoria": String,
    "precio": number,
}

export interface ITecnologia extends IProducto{

    "estado": string,
}

export interface IInmobiliaria extends IProducto{

    "metros": number,
    "banios": number,
    "habitaciones": number,
    "localidad": string,
    "precio": number,

}
export interface IMotor extends IProducto{

    "vehiculo": String,
    "km": number,
    "anio": number,
    "precio": number,
    
}
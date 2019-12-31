  
import { Component } from '@angular/core';
import { IProducto, ITecnologia, IMotor, IInmobiliaria } from '../interfaces';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

categoria: string;
nombre: string;
descripcion: string;
precio: number;
metros: number;
banios:number;
habitaciones:number;
localidad: string;
km: number;
anio: number;
vehiculo: string;
estado:string;



productos: (IProducto|ITecnologia|IInmobiliaria| IMotor) [] = [
  {
      "nombre" : "Taburete",
      "descripcion" : "De madera",
      "categoria": "Hogar",
      "precio": 123
      
  },

];

  constructor() {}


  insertar(){

    this.productos.push({
                            "nombre":this.nombre,
                            "descripcion": this.descripcion,
                            "categoria": this.categoria,
                            "precio": this.precio,
                            "metros": this.metros,
                            "banios": this.banios,
                            "habitaciones": this.habitaciones,
                            "localidad": this.localidad,
                            "km": this.km,
                            "anio": this.anio,
                            "vehiculo":this.vehiculo,
                            "estado":this.estado,
                        });

                        console.log("Se ha insertado un elemento")
  }

}
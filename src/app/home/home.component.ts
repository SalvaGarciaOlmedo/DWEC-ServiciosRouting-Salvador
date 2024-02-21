import { Component, OnInit } from '@angular/core';
import { AlertService } from '../Servicios/alert.service';
import { ProyectoServicioService } from '../Servicios/proyecto-servicio.service';
import { proyecto } from '../clases/proyecto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public proyecto: proyecto;
  public arrayProyectos: proyecto[] = [];

  constructor(private alerta: AlertService , private proyectoService: ProyectoServicioService){

    this.proyecto = this.proyectoService.obtenerProyecto()
    this.arrayProyectos = this.proyectoService.obtenerArrayProyecto()
  }
  
  enviarMensaje(mensaje : string){
    this.alerta.mostrarMensaje(mensaje)
  }

  ngOnInit():void{
    /* this.enviarMensaje('Hola') */

  }


}

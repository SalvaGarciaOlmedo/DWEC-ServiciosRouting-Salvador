import { Component, OnInit } from '@angular/core';
import { AlertService } from '../Servicios/alert.service';
import { proyecto } from '../clases/proyecto.model';
import { ProyectoServicioService } from '../Servicios/proyecto-servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {

  public proyectoName:string = ''
  public inp_presupuesto : string = ''

  public proyecto: proyecto = new proyecto();

  public listaProyecto: proyecto[] = new Array<proyecto>();

  constructor(private ruta: Router, private alerta: AlertService , private proyectoService: ProyectoServicioService){

  }
  
  enviarMensaje(mensaje : string){
    this.alerta.mostrarMensaje(mensaje)
  }

  agregar():void{
    this.proyecto.setnombreProyecto( this.proyectoName) 
    this.proyecto.setpresupuesto(this.inp_presupuesto) 
    this.proyectoService.crearProyecto(this.proyecto)

    this.ruta.navigate([''])


  }

  ngOnInit():void{
/*     this.enviarMensaje('Soy un servicio desde proyectos')
 */  }
}

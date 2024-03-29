import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PlaceHolder } from '../interfaces/place-holder';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  public url:string = 'https:\\jsonplaceholder.typicode.com/posts'
  public resultadoPeticion: any;
  public inputIdGet:string = "";

  constructor (private http: HttpClient){
    
  }


  get(){
    this.http.get(this.url)
    .subscribe( data =>{this.resultadoPeticion = data})
  }
  get2(){
    this.http.get(this.url + "/"+ this.inputIdGet)
    .subscribe( 
      data =>{this.resultadoPeticion = data
      console.log(this.resultadoPeticion.id);
      console.log(this.resultadoPeticion.userId);
      console.log(this.resultadoPeticion.body);
      console.log(this.resultadoPeticion.title);
      })
        
  }

  
  get3(){
    this.http.get<PlaceHolder>(this.url)
    .subscribe(
      {
      next:(respuesta : PlaceHolder) => {
        this.resultadoPeticion=respuesta
      console.log(this.resultadoPeticion.id);
      console.log(this.resultadoPeticion.userId)
      console.log(this.resultadoPeticion.body)
      console.log(this.resultadoPeticion.title)
      },
      error: (err)=>{console.log("error")}

    }
    )
  }

  post(){
    this.http.post(this.url, 
      {
        userId: 2, 
        id:200,
        title: "nuevo titulo",
        body: "nuevo cuerpo"
      }).subscribe(data =>{this.resultadoPeticion = data})
  }
  put(){
    this.http.put(this.url + "/10", 
      {
        userId: 2, 
        id:200,
        title: "nuevo titulo",
        body: "nuevo cuerpo"
      }).subscribe(data =>{this.resultadoPeticion = data})
  }

  patch(){
    this.http.patch(this.url + "/10", 
      {
        userId: 2, 
      
        title: "nuevo titulo",
        body: "nuevo cuerpo"
      }).subscribe(data =>{this.resultadoPeticion = data})
  }
  delete(){
    this.http.get(this.url + "/10")
    .subscribe( data =>{this.resultadoPeticion = data})
  }




}

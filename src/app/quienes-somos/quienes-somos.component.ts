import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  public url:string = 'https:\\jsonplaceholder.typicode.com/posts/1'
  public resultadoPeticion: any;

  constructor (private http: HttpClient){
    
  }


  get(){
    this.http.get(this.url)
    .subscribe( data =>{this.resultadoPeticion = data})
  }

}

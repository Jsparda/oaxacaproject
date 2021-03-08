import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickAddCompra(){
    alert('Hola');
  }

}
export interface ObjCompra {
  name: string;
  costo: string;
  stock: number;
  url: string;
}
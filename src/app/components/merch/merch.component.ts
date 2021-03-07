import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {

  merchs: Observable<any[]>;
  // let compras: ObjCompra[];
  constructor(firestore: AngularFirestore) {
    this.merchs = firestore.collection('merchs').valueChanges();

    let compras: ObjCompra[];
  }

  

  ngOnInit(): void {
    
  }
  clickAddCompra(merch:ObjCompra){
    alert(merch.name);
  }


}
export interface ObjCompra {
  name: string;
  costo: string;
  stock: number;
  url: string;
}
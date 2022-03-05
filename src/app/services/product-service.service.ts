import { MainComponent } from './../main/main.component';
import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  constructor(MainComponent: MainComponent) {
    this.here=MainComponent.ProductList
   }
  here: any
  GetAllProducts(){
    return [
      this.here
    ]
  }
}

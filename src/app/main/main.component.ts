import { DiscountOffers } from './../Shared Classes and types/discount-offers';
import { Component, OnInit } from '@angular/core';
import { iProducts } from '../Shared Classes and types/iProducts';
import { ICategory } from '../Shared Classes and types/i-category';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  
})
export class MainComponent implements OnInit {

  constructor() {
    this.Discount=DiscountOffers.ten
    this.ProductList=[{
      id:1,
    name:'waleed',
    quantity:2,
    price: 500,
    img: ""
    },{
      id:1,
      name:'waleed',
      quantity:2,
      price: 500,
      img: ""
    }]
    this.Storename='adidas'
    this.StoreLogo='../../assets/logo-paypal.png'
   }
    
    Discount:DiscountOffers
    Storename: string
    StoreLogo!: string
    ProductList!: iProducts[] 
    CategoryList!: ICategory[]
    ClientName!: String
    IsPurshased!: Boolean


  ngOnInit(): void {
  }

}

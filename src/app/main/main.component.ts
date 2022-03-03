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
    name:'product 1',
    quantity:18,
    price: 500,
    img: ""
    },{
      id:2,
      name:'product 2',
      quantity:66,
      price: 750,
      img: ""
    },{
      id:3,
      name:'product 3',
      quantity:133,
      price: 818,
      img: ""
    },{
      id:4,
      name:'product 4',
      quantity:600,
      price: 150,
      img: ""
    }]
    this.CategoryList=[{
      id:1,
      name:"shoes"
    },{
      id:2,
      name:"pants"
    },{
      id:3,
      name:"Shirts"
    },{
      id:4,
      name:"Accessories"
    }]
    this.Storename='adidas'
    this.StoreLogo='../../assets/exclusive.png'
    this.checkDiscount(this.Discount)
    
   }
    
    Discount:DiscountOffers
    Storename: string
    StoreLogo!: string
    ProductList!: iProducts[] 
    CategoryList!: ICategory[]
    ClientName="Waleed"
    IsPurshased!: Boolean
    NoDiscount!:Boolean 
    checkDiscount(Discount:DiscountOffers) {
      if(this.Discount==DiscountOffers.No){
        this.NoDiscount=false;
      }else{
        this.NoDiscount=true;
      }
    }
    isPurchased=true
    toggle(isPurchased:Boolean){
      this.isPurchased=false;
    }


  ngOnInit(): void {
  }

}

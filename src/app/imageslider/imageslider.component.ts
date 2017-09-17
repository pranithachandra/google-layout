import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prani',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

   items = [
      { image: 'assets/110px-025Pikachu-Original.png',productname:'tshirts',price:'10$',description:'Good  outfit for all ages' },
      { image: 'assets/110px-025Pikachu-Original.png',productname:'jeans',price:'100$',description:'Good  outfit for all ages'},
       { image: 'assets/110px-025Pikachu-Original.png',productname:'shirts',price:'1$',description:'Good  outfit for all ages' },
       { image: 'assets/110px-025Pikachu-Original.png',productname: 'trousers',price:'1000$',description:'Good  outfit for all ages'},
        { image: 'assets/110px-025Pikachu-Original.png',productname: 'lowers',price:'1000$',description:'Good  outfit for all ages'},
        { image: 'assets/110px-025Pikachu-Original.png',productname: 'trousers',price:'1000$',description:'Good  outfit for all ages'},
        { image: 'assets/110px-025Pikachu-Original.png',productname: 'lowers',price:'1000$',description:'Good  outfit for all ages'},
             { image: 'assets/110px-025Pikachu-Original.png',productname:'tshirts',price:'10$',description:'Good  outfit for all ages' },
      { image: 'assets/110px-025Pikachu-Original.png',productname:'jeans',price:'100$',description:'Good  outfit for all ages'},
       { image: 'assets/110px-025Pikachu-Original.png',productname:'shirts',price:'1$',description:'Good  outfit for all ages' },
       { image: 'assets/110px-025Pikachu-Original.png',productname: 'trousers',price:'1000$',description:'Good  outfit for all ages'},
        { image: 'assets/110px-025Pikachu-Original.png',productname: 'lowers',price:'1000$',description:'Good  outfit for all ages'},
        { image: 'assets/110px-025Pikachu-Original.png',productname: 'trousers',price:'1000$',description:'Good  outfit for all ages'},
        { image: 'assets/110px-025Pikachu-Original.png',productname: 'lowers',price:'1000$',description:'Good  outfit for all ages'},
    ]

    selectedProduct = function(x) {
      alert("Your selected:"+x.productname+"\nPrice:"+x.price+"\nDescription:"+x.description+"\nProductdetails:https://www.google.com")
      }
  

}

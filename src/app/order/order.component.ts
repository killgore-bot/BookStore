import { Component, OnInit, Injectable } from '@angular/core';

import { book } from '../bookModel';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  temp4: any = [];
  temp5: any = [];
  book ={
    name:'',
    email:'',
    author:'',
    price: '',
  };
  
 
  ngOnInit() {
     
    let temp4 = JSON.parse(localStorage.getItem('cart'));
    
    for (var i = 0; i <= this.temp4.length; i++)
    {
      let book = JSON.parse(temp4[i]);
      this.temp5.push({
        name: book.name,
        email : book.email,
        author : book.author,
        price : book.price
      });

      console.log(book.name);
      
    }
    
  }

  



}

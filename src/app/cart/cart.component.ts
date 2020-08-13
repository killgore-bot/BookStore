import { Component, OnInit } from '@angular/core';
import { book } from '../bookModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  books: book[] = [];
  temp1: any = [];
  temp2: any = [];

  ngOnInit() 
  { 
    
    let temp1 = JSON.parse(localStorage.getItem('cart'));
    
    for (var i = 0; i < temp1.length; i++)
    {
      let book = JSON.parse(temp1[i]);
      
      this.temp2.push({
				name:  book.name,
        email: book.email,
        author: book.author,
        price: book.price
        });

        console.log (book.name);
    }

    
    // for (var i = 0; i < temp1.length; i++)
    // {
    //   let books = JSON.parse(temp1[i]);
    // }
  }
 
 
  dCart()
  {
    localStorage.clear();
  }

  //temp3: any = [];
  temp3:any = JSON.parse(localStorage.getItem('cart'));
  delOne(j)
  {
    
      
      // for (var i = j; ; )
      {
      
      // this.temp3[j] = JSON.parse(this.temp1[j]);
      this.temp3.splice(j,1);
      this.temp1 = JSON.stringify(this.temp3);
      localStorage.setItem('cart',this.temp1)
      }
  }

 
  

}

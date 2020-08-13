import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {book} from '../bookModel';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: book[] = [];

  constructor(private service: BookService) { } 
  
 

  ngOnInit() {
    this.books = this.service.getBook();
  }

  delBook()
  {
    this.service.deleteBook(book.name);
  }

  // private boo:book;
  temp: any = [];
  
  onCick(boo:book)
  {
   this.temp.push(JSON.stringify(boo));
   console.log(boo.name);
   localStorage.setItem('cart',JSON.stringify(this.temp)); 
  }

  // addToCart()
  // {
  //   var a = localStorage.setItem('test', JSON.stringify(book));
     
  // }

  // showInCart()
  // {
  //   let item = JSON.parse(localStorage.getItem('test'));
  //   console.log(item);
  // }

  

}

import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private _app: BookService) { }

  @ViewChild('f',{static : true}) signupForm:NgForm;
  book ={
    name:'',
    email:'',
    author:'',
    price: '',
  };
  
 

  onSubmit()
{
  this.book.name = this.signupForm.value.Name;
  this.book.email = this.signupForm.value.Email;
  this.book.author = this.signupForm.value.Author;
  this.book.price = this.signupForm.value.Price;


  
  this._app.addUser(this.book);

  console.log(this.book);

  
     
    };



  ngOnInit() {
  }

}

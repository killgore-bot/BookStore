import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookService } from 'src/app/book.service';
import { book } from 'src/app/bookModel';

//import { url } from 'inspector';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit { 

 

  @ViewChild('f',{static : false}) signupForm:NgForm;
  
  
  constructor(private _app:BookService) { }

  onSubmit( )
{
  let bookObj = new book(this.signupForm.value.Name);
   

  this._app.addUser(bookObj);
}



  ngOnInit() { };

}

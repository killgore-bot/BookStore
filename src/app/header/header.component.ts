import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { book } from '../bookModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  books: book[] = [];
 

  constructor(private service: BookService) { }

  ngOnInit() 
  {
    

  }

}

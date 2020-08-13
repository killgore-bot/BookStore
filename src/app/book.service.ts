import { Injectable } from '@angular/core';
import { book} from './bookModel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  //dbLink : string = "http://localhost:60360/api/bookModels"

  dbLink : string = "https://new-project-9e859.firebaseio.com/user.json"

  constructor(private http: HttpClient) { }

  public books: book[] = [];
  temp: Array<string> = [];
   
  addUser(_book : book)
   {
    this.http.post(this.dbLink,_book).subscribe(
    response =>  {console.log(response)}
    ),
    error =>{
     console.log(error);
   }

  }   


  // addToCart()
  
  // {
  //   localStorage.setItem()
  // }

    getBook(): book[]
    {
      this.books = [];
      this.http.get(this.dbLink).subscribe(
        responseObj => 
        {
          for(let objkey in responseObj)
          {            
            this.books.push(responseObj[objkey]);
            console.log(responseObj[objkey]);
          } 
        }
      )
      
      return this.books;
    }


    deleteBook(name : string ){
      return this.http.delete(this.dbLink).subscribe(
        response => console.log(response)
      );
    }



  
    // private addBookinList(): book[]
    // {
    //   this.books = [];
    //   this.http.get(this.dbLink).subscribe
    //   return 
    // }

    // getBookbyID(ID): book[]{
    //   this.books = [];
    //   this.http.get(this.dbLink).subscribe(
    //      new Map(book => {
    //       for (let objkey in book.responseObj) {
    //         let ob =responseObj.find(x=> x.id === id )
    //           if (ob)
    //             this.books.push();
    //       }
    //     })
    //   )

    // }

}

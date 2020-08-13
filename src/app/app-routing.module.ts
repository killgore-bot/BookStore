import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {HeaderComponent} from './header/header.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import {BookAddComponent} from './book-add/book-add.component';
import {CartComponent} from './cart/cart.component';
import { OrderComponent } from './order/order.component';
const routes: Routes = [ 
  //{ path:'', component: HeaderComponent},
  {path: 'Welcome', component: WelcomeComponent},
  {path: 'Books',component:BooksComponent},
  {path: 'Cart', component:CartComponent},
   // {path:'',redirectTo:'Books',pathMatch:'full'},
    {path:'Bookadd',component:BookAddComponent},
    {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

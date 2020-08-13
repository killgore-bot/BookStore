import { Injectable } from '@angular/core';
import {Order} from './orderModel'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private order: Order) { }
   
  sum : string;
  

  total()
  {
   this.sum = this.sum + this.order.price 
  }

}

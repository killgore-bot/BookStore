import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

fullImagePath: string =  "https://media2.trover.com/T/5cb0d101f0c17a51ee007e47/fixedw_large_4x.jpg";



  constructor() {
    
   }
 
  ngOnInit() {
  }

}

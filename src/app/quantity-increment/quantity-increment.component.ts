import { Component, OnInit } from '@angular/core';
//import { count } from 'console';
//import { createPublicKey } from 'crypto';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {
 msg:String="";
 count:number=0;
  constructor() {
    
   }

  ngOnInit(): void {
  }
  Increment(){
    
    this.count++;
  }
  Decrement()
  {
    this.count--;
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-nested-oberable',
  templateUrl: './nested-oberable.component.html',
  styleUrls: ['./nested-oberable.component.css']
})
export class NestedOberableComponent implements OnInit {

  constructor() { 
    this.buySugarFromShop();
  }

  buySugarInBulk() {
    return new Observable(emitter => {
      emitter.next('Sugar is purchased');
    });
  }

  buySugarInQuantity(quantity: any) {
    return new Observable(emitter => {
      emitter.next('Sugar with Quantity: ' + quantity + ' is here for you');
    });
  }

  buySugarFromShop() {
    // observable A is dependant on Observable B
    // we need to observe value of B only
    // this.buySugarInBulk().subscribe(data => {
    //   this.buySugarInQuantity('1Kg').subscribe(res => {
    //     console.log(res);
    //   });
    // });
    const newObserver = this.buySugarInBulk().pipe(switchMap(() => {
      return this.buySugarInQuantity('1kg');
    }));
    newObserver.subscribe((data) => {
      console.log(data);
    });
  }


  ngOnInit(): void {
  }

}

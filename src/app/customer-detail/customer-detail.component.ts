import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  //Input Decorator to recieve the data from parent(customer-list)
  @Input() customer: Customer = new Customer();
  @Input() age: number = 0;

  //Output Decorator to customerChange
  @Output() customerChange: EventEmitter<Customer> =
    new EventEmitter<Customer>();

  @Output() incrementAge: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.customerChange.emit(this.customer);
  }

  updateAge() {
    this.incrementAge.emit(this.age);
  }
}

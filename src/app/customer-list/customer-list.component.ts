import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [
    {
      customerNo: 1,
      name: 'Babar Azam',
      address: '',
      country: 'Pakistan',
    },
    {
      customerNo: 2,
      name: 'Rizwan',
      address: '',
      country: 'Pakistan',
    },
    {
      customerNo: 3,
      name: 'Hafeez',
      address: '',
      country: 'Pakistan',
    },
    {
      customerNo: 4,
      name: 'Shaheen',
      address: '',
      country: 'Pakistan',
    },
    {
      customerNo: 5,
      name: 'Shoaib',
      address: '',
      country: 'Pakistan',
    },
  ];

  //New Obj for every selected customer
  selectedCustomer: Customer = new Customer();
  sage: number = 12;

  constructor() {}
  ngOnInit(): void {}

  //Method to show details of a specific customer
  showDetails(customer: Customer) {
    this.selectedCustomer = Object.assign({}, customer);
  }

  //Method to update customer
  update(customer: Customer) {
    let cust = this.customers.find((e) => e.customerNo == customer.customerNo);
    Object.assign(cust, customer);
    alert('Customer Saved');
  }

  incrementAge(age: number) {
    this.sage++;
  }
}

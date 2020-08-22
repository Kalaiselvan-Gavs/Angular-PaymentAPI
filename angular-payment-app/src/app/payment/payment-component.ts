import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
//import { Headers, RequestOptions } from '@angular/http';

import { Payment } from './payment';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentFormComponent {

  model = new Payment('1', '', '', '');
  submitted = false;
  url = "http://localhost:8080/employees/save";

  constructor(private http: HttpClient){
  }

  onSubmit() { 
    this.submitted = true; 
    let headers = new HttpHeaders()
    headers = headers.append('content-type','application/json')
    headers = headers.append('X-Request-Id','<ReqId>')
    headers = headers.append('Signature-Certificate','<SignatureCer>')
    headers = headers.append('Signature','<Signature>')
    return this.http.post(this.url, this.model, {'headers':headers}).subscribe(data => {
      console.log(data);
    });
  }

  newPayment() {
    this.model = new Payment('','', '', '');
  }
  
}

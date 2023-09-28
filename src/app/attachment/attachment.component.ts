import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css'],
})
export class AttachmentComponent implements OnInit {
  attachment: any
  payments: any
  grade: any
  name: any
  totalAmount: any

  ngOnInit(): void {
    this.payments = localStorage.getItem('payments');
    this.grade = localStorage.getItem('grade');
    this.name = localStorage.getItem('name');
    this.attachment = JSON.parse(this.payments);

    // const payment = this.attachment.filter((p:any)=>p.amount_paid)
    const paymentsWithAmount = this.attachment.filter(
      (p: any) =>
        typeof p.amount_paid === 'string' && parseFloat(p.amount_paid) > 0
    );

    const totalAmountPaid = paymentsWithAmount.reduce(
      (sum: number, p: any) => sum + parseFloat(p.amount_paid),
      0
    );

    this.totalAmount = totalAmountPaid

    console.log(paymentsWithAmount);
    console.log(totalAmountPaid);

    console.log(this.attachment);
  }
}

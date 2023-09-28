import { Component } from '@angular/core';
import { PostService } from '../api/post.service';
import { Router } from '@angular/router';

interface Payment {
  amount_paid: number | null;
  date_of_payment: string;
  proof_payment: string;
}

interface Student {
  grade: string | null;
  strand: string | null;
  date_register: string;
  sector: string;
  gradelvl: string;
  total_amount_paid: number;
  payments: Payment[];
}

interface Students {
  [name: string]: Student;
}

@Component({
  selector: 'app-student-approval',
  templateUrl: './student-approval.component.html',
  styleUrls: ['./student-approval.component.css'],
})
export class StudentApprovalComponent {
  students: Students = {}; // Initialize as an empty object, not array
  sample: any;

  constructor(private post: PostService, private route: Router) {}

  ngOnInit(): void {
    this.post.getStudent().subscribe((result: any) => {
        console.log(result.data);
        this.students = result.data;

      });
}
getDisplayValue(value: any) {
  if (value.sector === 'Public') {
    return 1750 - value.total_amount_paid;
  } else if (value.sector === 'Private') {
    return 5250 - value.total_amount_paid;
  } else {
    return value.total_amount_paid;
  }
}

getAmount(sector: string | null) {
  if (sector === 'Public') {
    return 1750;
  } else if (sector === 'Private') {
    return 5250;
  } else {
    return 5250;
  }
}

  getPayment(payments: any, grade: any, name: any) {
    console.log(payments, grade, name);
    localStorage.setItem('payments', JSON.stringify(payments));
    localStorage.setItem('grade', grade);
    localStorage.setItem('name', name);
    this.route.navigate(['/home/attachment']);
  }

  getName(name :any) {
    console.log(name)
  }
}

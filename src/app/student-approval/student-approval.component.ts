import { Component } from '@angular/core';
import { PostService } from '../api/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-approval',
  templateUrl: './student-approval.component.html',
  styleUrls: ['./student-approval.component.css']
})
export class StudentApprovalComponent {

  students: any

  constructor(private post: PostService, private route: Router) {}

  ngOnInit(): void{
    this.post.getStudent().subscribe((result: any)=>{
      console.log(result.data)

      this.students = result.data
    })
  }

  getPayment(Name:any, grade:any, total_amount_paid:any, img: any) {

    localStorage.setItem('Name', Name)
    localStorage.setItem('Grade', grade)
    localStorage.setItem('TotalAmt', total_amount_paid)
    localStorage.setItem('img', img)

    this.route.navigate(['/home/attachment'])
  }

}

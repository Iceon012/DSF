import { Component } from '@angular/core';
import { PostService } from '../api/post.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  filtered: string = 'All'

  student: any

  constructor(private call: PostService) {}

  ngOnInit(): void {
    this.call.Students().subscribe((result:any)=>{
      console.log(result.data)
      this.student = result.data
    })
  }

  selectedFilter(event: any) {
    this.filtered = event.target.value

    console.log(this.filtered)

    this.call.Students().subscribe((result:any)=>{
      if(event.target.value === 'all') {
        this.student = result.data
      }
      else {
        const student = result.data.filter((p:any) => p.gradelvl === this.filtered);
        this.student = student
        console.log(this.student)
      }

    })
  }

}

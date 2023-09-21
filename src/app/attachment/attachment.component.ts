import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {
  src = "http://localhost/nlacacademy/Proof/";

  name: string | null = null;
  grade: string | null = null;
  downpayment: string | null = null;
  image: string | null = null;
  img: string | null = null;

  ngOnInit(): void {
    this.name = localStorage.getItem('Name');
    this.grade = localStorage.getItem('Grade');
    this.downpayment = localStorage.getItem('TotalAmt');
    this.image = localStorage.getItem('img');

    if (this.image) {
      this.img = this.src + this.image;
    }
  }
}

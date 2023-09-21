import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost/nlacacademy/DSF/'

  constructor(private http: HttpClient ) { }

  getStudent() {
    return this.http.get(this.url + 'getStudents.php');
  }

  Students() {
    return this.http.get(this.url + 'students.php');
  }

}

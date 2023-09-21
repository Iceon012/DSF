import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  err = false

  constructor(private route: Router) {}

  login = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })

  ngOnInit(): void {

  }

  submit() {
    console.log(this.login.value)

    if(this.login.value.email == 'arvin' && this.login.value.pass == 'password' ) {

      localStorage.setItem('admin', this.login.value.email)
      this.route.navigate(['/home'])
    }
    else {
      this.err = !this.err
    }
  }
}

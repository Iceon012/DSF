import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Guard {

  isLogin = false

  isAuthenticated() {
    if(localStorage.getItem('admin') != undefined) {
      this.isLogin = true
    }
    return this.isLogin;
  }

}

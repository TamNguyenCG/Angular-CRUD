import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  checkAccount(data: any) {
    return data.email == 'admin@gmail.com' && data.password == '123456';
  }

  isLogin(){
    return localStorage.getItem('token');
  }
}

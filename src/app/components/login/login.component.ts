import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup | undefined;

  errLogin: any = '';
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    let data = this.formLogin?.value;
    if(this.authService.checkAccount(data)){
      this.router.navigate(['admin/users']);
      localStorage.setItem('token','121212');
      this.toastr.success('Welcome back ','Success')
    } else{
        this.errLogin = this.toastr.error('Account is not exist','Error')
    }
  }


}

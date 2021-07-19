import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formAddUser: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private location: Location,
              private userService: UserService,
              private router:Router) {
  }

  backClicked() {
    this.location.back();
  }
  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', [Validators.required]],
      image: [''],
      // status: [''],
      // id: ['']
    })
  }

  submit() {
    this.formAddUser?.patchValue({
      image: 'https://img.icons8.com/bubbles/2x/user.png'
    })
    let data = this.formAddUser?.value;
    this.userService.add(data);
    this.router.navigate(['admin/users']);
  }

  get name() {
    return this.formAddUser?.get('name');
  }

  get address() {
    return this.formAddUser?.get('address');
  }

  get phone() {
    return this.formAddUser?.get('phone');
  }

  get email() {
    return this.formAddUser?.get('email');
  }

  getErrorMessageName() {
    return this.name?.hasError('required') ? "You must insert user name" : '';
  }

  getErrorMessageAddress() {
    return this.address?.hasError('required') ? "You must insert an email" : '';
  }

  getErrorMessagePhone() {
    if (this.phone?.hasError('required')) {
      return "You must insert a phone number";
    }
    return "Wrong type of phone number";
  }

  getErrorMessageEmail() {
    if (this.email?.hasError('required')) {
      return "You must insert a email";
    }
    return "Wrong type of email";
  }

}

import { Injectable } from '@angular/core';
import {IUser} from "../components/users/IUser";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private toastr: ToastrService) { }

  users: IUser[] = [
    {
      id: 1,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Nguyen Duc Tam',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 1,
    },
    {
      id: 2,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Nguyen Son Thanh',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 2,
    },
    {
      id: 3,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Nguyen Tien Dat',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 3,
    },
    {
      id: 4,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Pham Minh Tien',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 1,
    },
    {
      id: 5,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Nguyen Van Hai',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 2,
    },
    {
      id: 6,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Banh Le Duc',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 3,
    },
    {
      id: 7,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Pham Ngo Anh Cuong',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 1,
    },
    {
      id: 8,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Doan Phi Hung',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 1,
    },
    {
      id: 9,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Chu Duc Duong',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 2,
    },
    {
      id: 10,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Hoang Van Tu',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 3,
    },
    {
      id: 11,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Duong Hoai Thuong',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 3,
    },
    {
      id: 12,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Pham Thi Dao',
      email: 'example@gmail.com',
      address: 'Ha Noi',
      phone: '012341234',
      status: 2,
    }
  ];

  getAll(): IUser[]{
    return this.users;
  }

  add(user: IUser){
    this.users.unshift(user);
    this.toastr.success('Add New User Success');
  }

  findByID(index: number){
    return this.users[index];
  }

  // @ts-ignore
  delete(index: number){
    if(confirm('Are you sure?')) {
      this.toastr.success('Delete User Success')
      return this.users.splice(index, 1);
    }
  }
}

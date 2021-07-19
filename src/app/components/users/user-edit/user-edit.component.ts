import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-users-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private router:ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    let userEdit = this.userService.findByID(id);
  }

}

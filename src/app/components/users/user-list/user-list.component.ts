import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from "../IUser";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  title = "User Manager";

  users: IUser[] = [];
  displayedColumns: string[] = ['No.', 'Image', 'Name', 'Email', 'Address', 'Phone', 'Status','Action'];
  dataSource = new MatTableDataSource<IUser>(this.userService.getAll());

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.usersFilter = this.users;
  }

  usersFilter: void | IUser[] = [];

  searching(keyword: string) {
    return this.users.filter((user: IUser) => {
      return user.name.toLowerCase().indexOf(keyword) !== -1;
    })
  }

  search(event: any) {
    const keyword = event.target.value.toLowerCase();
    this.usersFilter = (keyword) ? this.searching(keyword) : this.users;
    this.dataSource = new MatTableDataSource<IUser>(this.usersFilter);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  delete(i: number){
      this.userService.delete(i);
      this.dataSource=new MatTableDataSource<IUser>(this.userService.getAll());
      // @ts-ignore
      this.dataSource.paginator = this.paginator;
  }
}

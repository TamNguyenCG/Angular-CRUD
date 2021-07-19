import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {LoginComponent} from "./components/login/login.component";
import {MasterComponent} from "./layouts/master/master.component";
import {AuthGuard} from "./auth.guard";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'users/add',
        component: UserAddComponent
      },
      {
        path:'users/:id/edit',
        component: UserEditComponent
      }
    ], canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

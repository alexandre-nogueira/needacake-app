import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from 'src/app/core/guards/login.guard';
import { ForgotMyPasswordComponent } from './components/forgot-my-password/forgot-my-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ConfirmUserComponent } from './components/confirm-user/confirm-user.component';
import { UserMainComponent } from './components/user-main/user-main.component';

const routes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'register',
        component: RegisterUserComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'forgotMyPassword',
        component: ForgotMyPasswordComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
      },
    ],
  },
  // {
  //   path: '',
  //   component: LoginComponent,
  //   canActivate: [LoginGuard],
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   canActivate: [LoginGuard],
  // },
  // {
  //   path: 'forgotMyPassword',
  //   component: ForgotMyPasswordComponent,
  //   canActivate: [LoginGuard],
  // },
  // {
  //   path: 'register',
  //   component: RegisterUserComponent,
  //   canActivate: [LoginGuard],
  // },
  {
    path: 'recoverPassword/:rpt',
    component: RecoverPasswordComponent,
  },
  // {
  //   path: 'changePassword',
  //   component: ChangePasswordComponent,
  // },
  {
    path: 'confirm/:confirmUserToken',
    component: ConfirmUserComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}

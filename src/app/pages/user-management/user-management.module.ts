import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotMyPasswordComponent } from './components/forgot-my-password/forgot-my-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { ConfirmUserComponent } from './components/confirm-user/confirm-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotMyPasswordComponent,
    RegisterUserComponent,
    ChangePasswordComponent,
    RecoverPasswordComponent,
    ConfirmUserComponent,
    UserMainComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class UserManagementModule {}

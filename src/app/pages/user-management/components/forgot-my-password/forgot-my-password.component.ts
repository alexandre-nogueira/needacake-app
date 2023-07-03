import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-forgot-my-password',
  templateUrl: './forgot-my-password.component.html',
  styleUrls: ['./forgot-my-password.component.scss'],
})
export class ForgotMyPasswordComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      user: ['', [Validators.email, Validators.required]],
    });
  }

  recoverPassword(): void {
    this.userService
      .recoverPassword(this.userForm.get('user')?.value ?? '')
      .subscribe({
        next: (data) => {
          this.alertService.success('Email de recuperação de senha enviado');
        },
        error: (error) => {
          console.log(error);
          this.alertService.warning('Ocorreu um erro');
        },
      });
    //Colocar uma mensagem na tela dizendo que foi enviado um email de recuperação.
    this.router.navigate(['home']);
  }
}

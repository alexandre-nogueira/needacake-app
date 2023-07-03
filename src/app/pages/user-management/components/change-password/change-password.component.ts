import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { samePasswordValidator } from '../../util/same-password-validator';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  @Input() email = '';
  @Input() rpt = '';

  passwordForm!: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const userLoggedEmail = this.userService.getUserData()?.email ?? '';
    //if there is a user logged, it must override the input
    if (userLoggedEmail) {
      this.email = userLoggedEmail;
      if (this.rpt) {
        this.alertService.warning(
          'Usuário já logado, utilize a opção de alterar senha'
        );
        this.router.navigate(['home']);
      }
    }

    if (this.email === '' && this.rpt === '') {
      this.router.navigate(['user']);
    }

    this.passwordForm = this.formBuilder.group(
      {
        password: ['', [Validators.minLength(5), Validators.required]],
        confirmPassword: ['', [Validators.minLength(5), Validators.required]],
      },
      {
        validators: [samePasswordValidator],
      }
    );
  }

  changePassword() {
    const newPassord = this.passwordForm.get('password')?.value;
    this.userService.changepassword(newPassord, this.rpt).subscribe({
      next: () => {
        this.alertService.success('Senha alterada com sucesso');
        if (this.userService.isLogged()) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['user']);
        }
      },
      error: (error) => {
        this.alertService.danger('Erro ao alterar a senha');
        console.log(error);
      },
    });
  }
}

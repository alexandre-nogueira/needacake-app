import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss'],
})
export class ConfirmUserComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const confirmUserToken =
      this.activatedRoute.snapshot.params['confirmUserToken'];
    if (confirmUserToken) {
      this.userService.confirmUser(confirmUserToken).subscribe({
        next: () => {
          this.alertService.success('Usuário confirmado');
          this.router.navigate(['/user']);
        },
        error: (error) => {
          this.alertService.danger('Ocorreu um erro');
          console.log(error);
        },
      });
    }
  }
}

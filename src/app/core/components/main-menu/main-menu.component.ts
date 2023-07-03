/* eslint-disable no-unused-vars */
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

  // faUser = faUserCircle;
  user$ = this.userService.getUserSubjectData();

  ngOnInit(): void {
    this.user$.subscribe(() => {
      this.isLogged = this.userService.isLogged();
    });
  }

  // public isMenuCollapsed = true;
  public isLogged = false;

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['home']);
      },
      error: (error) => {
        console.log(error);
        this.alertService.warning('Não foi possível efetuar o logout');
      },
    });
  }
}

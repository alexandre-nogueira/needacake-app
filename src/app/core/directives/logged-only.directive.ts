/* eslint-disable no-unused-vars */
import { UserService } from 'src/app/core/user/user.service';
import { Directive, ElementRef, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[loggedOnly]',
})
export class LoggedOnlyDirective implements OnChanges {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private userService: UserService
  ) {
    !this.userService.isLogged() &&
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
  }

  ngOnChanges(): void {
    !this.userService.isLogged() &&
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
  }
}

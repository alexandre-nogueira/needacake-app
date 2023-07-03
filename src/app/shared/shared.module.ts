import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [AlertComponent, FormMessageComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [AlertComponent, FormMessageComponent, LoadingComponent],
})
export class SharedModule {}

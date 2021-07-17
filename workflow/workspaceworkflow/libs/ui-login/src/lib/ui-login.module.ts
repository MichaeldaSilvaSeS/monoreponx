import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoginFormComponent } from './ui-login-form/ui-login-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiLoginFormComponent],
  exports: [UiLoginFormComponent]
})
export class UiLoginModule {}

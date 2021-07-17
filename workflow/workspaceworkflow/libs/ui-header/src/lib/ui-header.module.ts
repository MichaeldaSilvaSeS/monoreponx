import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTitleComponent } from './ui-title/ui-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiTitleComponent],
  exports: [UiTitleComponent],
})
export class UiHeaderModule {}

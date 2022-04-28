import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindyCardComponent } from './card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BindyCardComponent],
  exports: [BindyCardComponent],
})
export class BindyCardModule {}

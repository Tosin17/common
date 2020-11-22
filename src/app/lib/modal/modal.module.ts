import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OpenOnClickDirective } from './open-on-click.directive';

@NgModule({
  declarations: [ModalComponent, OpenOnClickDirective],
  imports: [CommonModule],
  exports: [ModalComponent, OpenOnClickDirective],
  providers: [],
})
export class ModalModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OpenOnClickDirective } from './open-on-click.directive';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [ModalComponent, OpenOnClickDirective],
  imports: [CommonModule],
  exports: [ModalComponent, OpenOnClickDirective],
})
export class ModalModule {
  static forRoot() {
    return {
      ngModule: ModalModule,
      provider: ModalService,
    };
  }
}

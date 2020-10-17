import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRefDirective } from '../lib/common/input-ref.directive';
import { IconInputComponent } from '../lib/icon-input/icon-input.component';

@NgModule({
  declarations: [InputRefDirective, IconInputComponent],
  imports: [CommonModule],
  exports: [InputRefDirective, IconInputComponent],
  providers: [],
})
export class IconInputModule {}

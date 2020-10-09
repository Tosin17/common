import {
  AfterViewInit,
  Component,
  ContentChild,
  HostBinding,
  Input,
} from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.scss'],
})
export class IconInputComponent implements AfterViewInit {
  @Input() icon = 'No Icon';
  @ContentChild(InputRefDirective) input: InputRefDirective;

  constructor() {}

  ngAfterViewInit(): void {
    if (!this.input) {
      console.error('No input in projected content');
    }
  }

  @HostBinding('class.input-focus')
  get onInputFocus() {
    return this.input?.isFocused;
  }

  @HostBinding('class.input-error')
  get onInputError() {
    return this.input?.hasError;
  }
}

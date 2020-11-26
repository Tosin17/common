import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[input-mask]',
})
export class InputMaskDirective {
  @Input('input-mask') mask = '';
  inputRef: HTMLInputElement;

  constructor(private el: ElementRef) {
    this.inputRef = this.el.nativeElement;
  }
}

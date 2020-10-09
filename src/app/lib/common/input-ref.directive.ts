import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[icon-input input]',
})
export class InputRefDirective {
  @Input() max = 0;
  isFocused = false;
  hasError = false;
  constructor(private el: ElementRef) {}

  @HostListener('focus')
  onFocus() {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.isFocused = false;
    this.hasError = !this.el.nativeElement.value.trim();
  }

  @HostListener('input')
  onInput() {
    this.hasError = !this.el.nativeElement.value.trim();
  }
}

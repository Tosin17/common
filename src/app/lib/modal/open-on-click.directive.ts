import {
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Directive({
  selector: '[appOpenOnClick]',
})
export class OpenOnClickDirective implements OnDestroy {
  isComponentActive = true;
  @Input() set appOpenOnClick(el: HTMLBaseElement) {
    fromEvent(el, 'click')
      .pipe(takeWhile(() => this.isComponentActive))
      .subscribe((_) => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.tpl);
      });
  }

  constructor(
    private tpl: TemplateRef<any>,
    private viewContainer: ViewContainerRef // Position in the DOM created by Angular
  ) {}

  ngOnDestroy() {
    this.isComponentActive = false;
  }
}

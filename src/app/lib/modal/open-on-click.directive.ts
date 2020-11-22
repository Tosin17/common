import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ModalService } from './modal.service';

@Directive({
  selector: '[appOpenOnClick]',
})
export class OpenOnClickDirective implements OnInit, OnDestroy {
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
    private viewContainer: ViewContainerRef,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.modalService.onClose().subscribe((_) => {
      this.viewContainer.clear();
    });
  }

  ngOnDestroy() {
    this.isComponentActive = false;
  }
}

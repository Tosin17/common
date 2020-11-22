import { Component, Input, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() body;
  @Input() closeOnEsc = true;

  constructor(
    private modalService: ModalService,
    private evtManager: EventManager
  ) {}

  ngOnInit(): void {
    this.evtManager.addEventListener(window as any, 'keyup.esc', () => {
      if (this.closeOnEsc) {
        this.close();
      }
    });
  }

  close() {
    this.modalService.close();
  }
}

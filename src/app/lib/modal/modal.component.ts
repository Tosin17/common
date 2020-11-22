import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() body;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  close() {
    this.modalService.close();
  }
}

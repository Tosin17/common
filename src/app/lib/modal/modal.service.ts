import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private close$ = new Subject();

  close() {
    this.close$.next(true);
  }

  onClose(): Observable<any> {
    return this.close$;
  }
}

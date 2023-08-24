import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventId = new BehaviorSubject<number>(0);
  private eventInfo = new BehaviorSubject<Record<number, string | number[]>>('');

  emitIdEvent(msg: number) {
    this.eventId.next(msg);
  }

  emitChildEvent(msg: Record<number, string | number[]>) {
    this.eventInfo.next(msg);
  }

  idEventListener() {
    return this.eventId.asObservable();
  }

  childEventListener() {
    return this.eventInfo.asObservable();
  }
}

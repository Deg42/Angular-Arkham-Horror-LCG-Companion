import { Component, Input } from '@angular/core';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input() id: number = 0;
  counters: number[] = [0, 2, 5];

  constructor(private eventService: EventService) { }

  calculateCounter(index: number, operation: string) {
    if (operation == "add") {
      this.counters[index] >= 99 ? this.counters[index] : this.counters[index]++;
    } else if (operation == "substract") {
      this.counters[index] <= 0 ? this.counters[index] : this.counters[index]--;
    }

    this.eventService.emitChildEvent({
      [this.id]: this.counters
    });
  }

  applyStyle(index: number) {
    if (index === 0) {
      return {
        color: 'var(--carmine)',
        textShadow: '2px 0 var(--parchment), -2px 0 var(--parchment), 0 2px var(--parchment), 0 -2px var(--parchment), 1px 1px var(--parchment), -1px -1px var(--parchment), 1px -1px var(--parchment), -1px 1px var(--parchment)'
      };
    } else if (index <= 2) {
      return { color: 'yellow' }
    } else {
      return { color: 'white' };
    }
  }

}

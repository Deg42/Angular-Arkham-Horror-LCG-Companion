import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counters: number[] = [0, 2, 5];

  addCounter(index: number) {
    this.counters[index] >= 99 ? this.counters[index] : this.counters[index]++;
  }

  substractCounter(index: number) {
    this.counters[index] <= 0 ? this.counters[index] : this.counters[index]--;
  }

  applyStyle(index: number) {
    if (index === 0) {
      return { color: 'DarkRed',
      textShadow: '2px 0 var(--parchment), -2px 0 var(--parchment), 0 2px var(--parchment), 0 -2px var(--parchment), 1px 1px var(--parchment), -1px -1px var(--parchment), 1px -1px var(--parchment), -1px 1px var(--parchment)'
     };
    } else if (index <= 2) {
      return { color: ' yellow' }
    } else {
      return { color: 'white' };
    }
  }

}

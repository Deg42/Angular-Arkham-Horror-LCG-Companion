import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counters: number[] = [0,0,0];

  addCounter(index: number) {
    this.counters[index] >= 99 ? this.counters[index] : this.counters[index]++;
  }

  substractCounter(index: number) {
    this.counters[index] <= 0 ? this.counters[index] : this.counters[index]--;
  }

}

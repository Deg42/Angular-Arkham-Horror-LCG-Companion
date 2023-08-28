import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() id: number = 0;
  counters: number[] = [0, 0, 0];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.counters = this.localStorageService.getItem(`counter${this.id}`) ?? this.counters;
  }

  calculateCounter(index: number, operation: string) {
    if (operation == "add") {
      this.counters[index] >= 99 ? this.counters[index] : this.counters[index]++;
    } else if (operation == "substract") {
      this.counters[index] <= 0 ? this.counters[index] : this.counters[index]--;
    }

    this.localStorageService.setItem(`counter${this.id}`, this.counters)
  }

  applyStyle(index: number) {
    if (index === 0) {
      return {
        color: 'var(--carmine)',
        textShadow: '2px 0 var(--dutch-white), -2px 0 var(--dutch-white), 0 2px var(--dutch-white), 0 -2px var(--dutch-white), 1px 1px var(--dutch-white), -1px -1px var(--dutch-white), 1px -1px var(--dutch-white), -1px 1px var(--dutch-white)'
      };
    } else if (index <= 2) {
      return { color: 'yellow' }
    } else {
      return { color: 'white' };
    }
  }

}

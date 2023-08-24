import { Component, OnInit } from '@angular/core';
import { EventService } from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-Arkham-Horror-LCG-Companion';

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.childEventListener().subscribe(info => {
      console.log(info);
    })
  }
}

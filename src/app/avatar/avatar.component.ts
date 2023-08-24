import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() id: number = 0;

  investigators: string[] = [
    "Roland Banks",
    "Agnes Baker",
    "\"Malasombra\" O\'Toole",
    "Daisy Walker",
    "Wendy Adams"
  ];
  selectedInvestigator: string = "Roland Banks";
  background: String = "";


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.background = "url(../../assets/img/investigators/" + this.selectedInvestigator.replace(/['"\s]/g, '') + "Token.png) no-repeat";
    this.eventService.emitChildEvent({
      [this.id]: this.selectedInvestigator
    });
  }
}

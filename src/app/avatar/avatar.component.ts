import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

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
  selectedInvestigator: string = "";
  background: String = "";


  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.selectedInvestigator = this.localStorageService.getItem(`investigator${this.id}`) ?? this.selectedInvestigator;
    this.changeInvestigator();
  }

  changeInvestigator() {
    this.selectedInvestigator != "" ? this.localStorageService.setItem(`investigator${this.id}`, this.selectedInvestigator) : null;
    this.background = `url(../../assets/img/investigators/${this.selectedInvestigator.replace(/['"\s]/g, '')}Token.png) no-repeat`;
  }
}

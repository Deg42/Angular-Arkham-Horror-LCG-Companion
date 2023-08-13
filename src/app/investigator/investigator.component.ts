import { Component, OnInit } from '@angular/core';
import { Investigator } from '../model/investigator.interface';

@Component({
  selector: 'app-investigator',
  templateUrl: './investigator.component.html',
  styleUrls: ['./investigator.component.css']
})
export class InvestigatorComponent implements OnInit {
  
  investigators: Investigator[] = [];
  selectedInvestigator: Investigator | undefined;
  background: String = "";

  ngOnInit(): void {
    this.investigators = [
      { name: "Roland Banks", image: "RolandBanks" },
      { name: "Agnes Baker", image: "AgnesBaker" },
      { name: "\"Malasombra\" O\'Toole", image: "SkidsOToole" },
      { name: "Daisy Walker", image: "DaisyWalker" },
      { name: "Wendy Adams", image: "WendyAdams" }
    ]

  }

  onchange(): void {
    this.background = "url(../../assets/img/investigators/" + this.selectedInvestigator!.image + "Token.png) no-repeat";
  }

}

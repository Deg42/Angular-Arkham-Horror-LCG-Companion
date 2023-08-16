import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-investigator',
  templateUrl: './investigator.component.html',
  styleUrls: ['./investigator.component.css']
})
export class InvestigatorComponent implements OnInit {


  investigators: string[] = [
    "Roland Banks",
    "Agnes Baker",
    "\"Malasombra\" O\'Toole",
    "Daisy Walker",
    "Wendy Adams"
  ];
  selectedInvestigator: string = "";
  background: String = "";

  ngOnInit(): void {
    this.background = "url(../../assets/img/investigators/" + this.selectedInvestigator.replace(/['"\s]/g, '') + "Token.png) no-repeat";
  }


}

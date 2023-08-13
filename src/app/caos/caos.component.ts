import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caos',
  templateUrl: './caos.component.html',
  styleUrls: ['./caos.component.css']
})
export class CaosComponent implements OnInit {

  difficulties: String[] = []
  selectedDifficulty: String = ""
  chaosBag: String[] = [];

  ngOnInit(): void {
    this.difficulties = ["Fácil", "Normal", "Difícil", "Experto"];
  }

  onchange(): void {
    this.chaosBag = [];
    switch (this.selectedDifficulty) {
      case "Fácil":
        this.chaosBag.push("Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break;
      case "Normal":
        this.chaosBag.push("Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break;
      case "Difícil":
        this.chaosBag.push("Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break
      case "Experto":
        this.chaosBag.push("Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break
      default:
        break;

    }
  }
}

import { Component, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-caos',
  templateUrl: './caos.component.html',
  styleUrls: ['./caos.component.css'],
  animations: [
    trigger('flipping', [
      state('before', style({
        backgroundImage: 'url("../../assets/img/chaosBag/Chaos{{tokenImageBefore}}.png")',
        transform: 'rotateY(0)'
      }), { params: { tokenImageBefore: ' ' } }),
      state('after', style({
        backgroundImage: 'url("../../assets/img/chaosBag/Chaos{{tokenImageAfter}}.png")',
        transform: 'rotateY(360deg)'
      }), { params: { tokenImageAfter: ' ' } }),
      transition('before => after', animate(500)),
      transition('after => before', animate(500))
    ])
  ]
})
export class CaosComponent {

  difficulties: string[] = ["Fácil", "Normal", "Difícil", "Experto"]
  selectedDifficulty: string = ""
  chaosBag: string[] = ["Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign"];
  history: string[] = ["", "", ""];

  state = 'before';
  before = 'Minus1';
  after = 'Cultist';

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
        this.chaosBag.push("Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break;
    }
  }

  pullOutToken() {
    if (this.state == 'before') {
      this.after = this.chaosBag[Math.floor(Math.random() * this.chaosBag.length)];
      this.state = 'after';
      this.history.push(this.before);
    } else if (this.state = 'after') {
      this.before = this.chaosBag[Math.floor(Math.random() * this.chaosBag.length)];
      this.state = 'before';
      this.history.push(this.after);
    }
    this.history.length > 3 ? this.history.shift() : '';
  }
}

import { Component, OnInit } from '@angular/core';
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
    ]),

    trigger('rotating', [
      state('before', style({
        transform: 'rotate(0)'
      })),
      state('after', style({
        transform: 'rotate(60deg)'
      })),
      transition('before => after', animate('0.5s ease-in')),
      transition('after => before', animate('0.5s ease-out')),
    ])
  ]
})
export class CaosComponent implements OnInit {

  difficulties: string[] = ["Fácil", "Normal", "Difícil", "Experto"]
  selectedDifficulty: string = "Fácil"

  chaosBag: string[] = ["Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign"];

  history: string[] = ["ElderSign", "ElderSign", "ElderSign"];

  flipTokenState = 'before';
  before = 'Minus1';
  after = 'Cultist';

  rotateButtonState = 'before';

  ngOnInit(): void {
    this.chaosBag = [];
    switch (this.selectedDifficulty) {
      case "Fácil":
        this.chaosBag.push("Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break;
      case "Normal":
        this.chaosBag.push("Plus1", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Minus3", "Minus4", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break;
      case "Difícil":
        this.chaosBag.push("0", "0", "0", "Minus1", "Minus1", "Minus2", "Minus2", "Minus3", "Minus3", "Minus4", "Minus5", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break
      case "Experto":
        this.chaosBag.push("0", "Minus1", "Minus1", "Minus2", "Minus2", "Minus3", "Minus3", "Minus4", "Minus4", "Minus5", "Minus6", "Minus8", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break
    }
    console.log(this.chaosBag);

  }

  pullOutToken() {
    this.rotateButtonState == 'before' ? this.rotateButtonState = 'after' : this.rotateButtonState;
    setTimeout(() => { this.rotateButtonState = 'before' }, 600);

    if (this.flipTokenState == 'before') {
      this.after = this.chaosBag[Math.floor(Math.random() * this.chaosBag.length)];
      this.flipTokenState = 'after';
      this.history.push(this.before);
    } else if (this.flipTokenState = 'after') {
      this.before = this.chaosBag[Math.floor(Math.random() * this.chaosBag.length)];
      this.flipTokenState = 'before';
      this.history.push(this.after);
    }
    this.history.length > 3 ? this.history.shift() : '';
  }
}

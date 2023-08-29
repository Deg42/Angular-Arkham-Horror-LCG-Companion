import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LocalStorageService } from '../service/local-storage.service';

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
      transition('before => after', animate('0.75s ease-out')),
      transition('after => before', animate('0.75s ease-out'))
    ]),

    trigger('rotating', [
      state('before', style({
        transform: 'rotate(0)'
      })),
      state('after', style({
        transform: 'rotate(70deg)'
      })),
      transition('before => after', animate('0.5s ease-in')),
      transition('after => before', animate('1s ease-out')),
    ])
  ]
})
export class CaosComponent implements OnInit {

  difficulties: string[] = ["Fácil", "Normal", "Difícil", "Experto"]
  selectedDifficulty: string = "Fácil"

  chaosBag: string[] = ["Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign"];

  actual: string = 'Empty';
  history: string[] = ['Empty', 'Empty', 'Empty'];

  flipTokenState = 'before';
  before = 'Empty';
  after = '';

  buttonState = 'before'

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.selectedDifficulty = this.localStorageService.getItem("difficulty") ?? this.selectedDifficulty;
    this.history = this.localStorageService.getItem("history") ?? this.history;
    this.actual = this.localStorageService.getItem("actual") ?? this.actual;

    this.before = this.actual;
    this.after = this.actual;

    this.selectDifficulty();
  }

  selectDifficulty() {
    this.chaosBag = [];
    switch (this.selectedDifficulty) {
      case this.difficulties[0]:
        this.chaosBag.push("Plus1", "Plus1", "0", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break;
      case this.difficulties[1]:
        this.chaosBag.push("Plus1", "0", "0", "Minus1", "Minus1", "Minus1", "Minus2", "Minus2", "Minus3", "Minus4", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break;
      case this.difficulties[2]:
        this.chaosBag.push("0", "0", "0", "Minus1", "Minus1", "Minus2", "Minus2", "Minus3", "Minus3", "Minus4", "Minus5", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break
      case this.difficulties[3]:
        this.chaosBag.push("0", "Minus1", "Minus1", "Minus2", "Minus2", "Minus3", "Minus3", "Minus4", "Minus4", "Minus5", "Minus6", "Minus8", "Skull", "Skull", "Cultist", "Tablet", "Autofail", "ElderSign");
        break
    }

    this.localStorageService.setItem("difficulty", this.selectedDifficulty)
  }

  pullOutToken() {
    let result = this.chaosBag[Math.floor(Math.random() * this.chaosBag.length)];

    if (this.flipTokenState == 'before') {
      this.after = result;
      this.flipTokenState = 'after';
      this.actual = this.after
      this.history.push(this.before);
    } else if (this.flipTokenState = 'after') {
      this.before = result;
      this.flipTokenState = 'before';
      this.actual = this.before;
      this.history.push(this.after);  
    }
    
    this.localStorageService.setItem("actual", this.actual)
    this.history.length > 3 ? this.history.shift() : '';
    this.localStorageService.setItem("history", this.history)
    
    this.buttonState = 'after'
    setTimeout(() => {
      this.buttonState = 'before';
    }, 500);
  }
}

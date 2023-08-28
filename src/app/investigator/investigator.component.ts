import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-investigator',
  templateUrl: './investigator.component.html'
})
export class InvestigatorComponent {

  @Input() id: number = 0

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent {

@Input()
photoCover:string = ""
@Input()
cardTitle:string = ""
@Input()
cardDescription:string = ""

constructor() {}

ngOnInit(): void {}

}

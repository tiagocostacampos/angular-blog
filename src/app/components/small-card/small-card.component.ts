import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover=""

  @Input()
  cardTitle=""

  constructor(){}

  ngOnInit(){}

}

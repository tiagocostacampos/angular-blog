import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover=""

  @Input()
  cardTitle=""

  @Input()
  Id=""

  constructor(){}

  ngOnInit(){}

}

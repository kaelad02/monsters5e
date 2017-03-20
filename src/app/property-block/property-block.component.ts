import { Component, OnInit, Input } from '@angular/core';
import { SpecialAbility } from '../monster';

@Component({
  selector: 'property-block',
  templateUrl: './property-block.component.html',
  styleUrls: ['./property-block.component.css']
})
export class PropertyBlockComponent implements OnInit {
  @Input() ability: SpecialAbility;

  constructor() { }

  ngOnInit() {
  }

}

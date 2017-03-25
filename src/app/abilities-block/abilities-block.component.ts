import { Component, OnInit, Inject, Input } from '@angular/core';
import { AbilityScore } from '../monster';

@Component({
  selector: 'abilities-block',
  templateUrl: './abilities-block.component.html',
  styleUrls: ['./abilities-block.component.css']
})
export class AbilitiesBlockComponent implements OnInit {
  @Input() abilityScores: AbilityScore[];

  readonly labels: string[] = [
    'STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'
  ];

  constructor() { }

  ngOnInit() {
  }
}

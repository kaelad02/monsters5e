import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AbilityScores, Ability } from '../monster';

@Component({
  selector: 'top-stats',
  templateUrl: './top-stats.component.html',
  styleUrls: ['./top-stats.component.css']
})
export class TopStatsComponent implements OnInit, OnChanges {
  @Input() armor_class: number;
  @Input() hit_points: number;
  @Input() hit_dice: string;
  hp_mod: number;
  @Input() speed: string;

  @Input() abilityScores: AbilityScores;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO check if hit_dice or abilityScores changed

    let index = this.hit_dice.indexOf('d');
    let numDice = this.hit_dice.substring(0, index);
    this.hp_mod = Number(numDice) * this.abilityScores.getModifier(Ability.CON);
  }

}

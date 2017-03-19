import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AbilityScores, Ability, SavingThrows } from '../monster';

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

  @Input() savingThrows: SavingThrows;
  private static readonly savingLabels: string[] = ["Str", "Dex", "Con", "Int", "Wis", "Cha"];
  saves: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO check if hit_dice or abilityScores changed

    let index = this.hit_dice.indexOf('d');
    let numDice = this.hit_dice.substring(0, index);
    this.hp_mod = Number(numDice) * this.abilityScores.getModifier(Ability.CON);

    this.saves = this.getSavingThrows();
  }

  getSavingThrows(): string {
    let saves = '';
    for (let a in Ability) {
      if (typeof Ability[a] === 'number') {
        // get the modifier
        let ability = Number(Ability[a]);
        let mod = this.savingThrows.getModifier(ability);
        if (mod != null) {
          if (saves.length > 0) {
            // add separator
            saves += ", ";
          }
          saves += TopStatsComponent.savingLabels[ability] + " ";
          if(mod >= 0) {
            saves += "+" + mod;
          } else {
            // use an en dash, not a normal dash to make it more visible
            saves += "–" + Math.abs(mod);
          }
        }
      }
    }
    return saves;
  }

}

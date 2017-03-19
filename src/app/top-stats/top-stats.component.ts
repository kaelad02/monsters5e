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

  @Input() skillModifiers: [string, number][];
  skills: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO check if hit_dice or abilityScores changed

    let index = this.hit_dice.indexOf('d');
    let numDice = this.hit_dice.substring(0, index);
    this.hp_mod = Number(numDice) * this.abilityScores.getModifier(Ability.CON);

    if (this.savingThrows) {
      this.saves = this.getSavingThrows();
    }
    if (this.skillModifiers) {
      this.skills = this.getSkills();
    }
  }

  formatModifier(modifier: number): string {
    if(modifier >= 0) {
      return '+' + modifier;
    } else {
      return '' + modifier;
    }
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
          saves += TopStatsComponent.savingLabels[ability] + " "
            + this.formatModifier(mod);
        }
      }
    }
    return saves;
  }

  getSkills(): string {
    let skills = '';
    for (let skill of this.skillModifiers) {
      if (skills.length > 0) {
        // add separator
        skills += ", ";
      }
      // format skill name
      let name = skill[0]
        .split('_')
        .map(function(s) {
          if (s == 'of') {
            return s;
          }
          // capitalize first letter
          return s.charAt(0).toUpperCase() + s.slice(1);
        })
        .join(' ');
      skills += name + ' ' + this.formatModifier(skill[1]);
    }
    return skills;
  }

}

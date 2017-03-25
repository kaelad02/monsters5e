import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AbilityScore, Ability } from '../monster';

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

  @Input() abilityScores: AbilityScore[];

  @Input() savingThrows: number[];
  private static readonly savingLabels: string[] = [
    'Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'
  ];
  saves: string;

  @Input() skillModifiers: number[];
  private static readonly skillLabels: string[] = [
    'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception',
    'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature',
    'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand',
    'Stealth', 'Survival'
  ];
  skills: string;

  @Input() damage_vulnerabilities: string;
  @Input() damage_resistances: string;
  @Input() damage_immunities: string;
  @Input() condition_immunities: string;
  @Input() senses: string;
  @Input() languages: string;

  @Input() challenge_rating: string;
  private static readonly xpByCr: number[] = [
    0, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900,
    7200, 8400, 10000, 11500, 13000, 15000, 18000, 20000, 22000, 25000,
    33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
  ];
  xp: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO check if hit_dice or abilityScores changed

    if (this.hit_dice && this.abilityScores) {
      let index = this.hit_dice.indexOf('d');
      let numDice = this.hit_dice.substring(0, index);
      this.hp_mod = Number(numDice) * this.abilityScores[Ability.CON].mod;
    }

    if (this.savingThrows) {
      this.saves = this.getSavingThrows();
    }
    if (this.skillModifiers) {
      this.skills = this.getSkills();
    }
    if (this.challenge_rating) {
      this.xp = this.getXp();
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
    for (let i = 0; i < this.savingThrows.length; i++) {
      let mod = this.savingThrows[i];
      if (mod != null) {
        if (saves.length > 0) {
          // add separator
          saves += ', ';
        }
        saves += TopStatsComponent.savingLabels[i] + ' '
          + this.formatModifier(mod);
      }
    }
    return saves;
  }

  getSkills(): string {
    let skills = '';
    for (let i = 0; i < this.skillModifiers.length; i++) {
      let mod = this.skillModifiers[i];
      if (mod != null) {
        if (skills.length > 0) {
          // add separator
          skills += ', ';
        }
        skills += TopStatsComponent.skillLabels[i] + ' '
          + this.formatModifier(mod);
      }
    }
    return skills;
  }

  getXp(): number {
    let xp: number;
    // check if this is a fraction of 1 CR
    let index = this.challenge_rating.indexOf('/');
    if (index >= 0) {
      let fraction = this.challenge_rating.slice(index + 1);
      xp = TopStatsComponent.xpByCr[1] / Number(fraction);
    } else {
      xp = TopStatsComponent.xpByCr[Number(this.challenge_rating)];
    }
    return xp;
  }

}

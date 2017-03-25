import { Component, OnInit, Input } from '@angular/core';
import { AbilityScore, Ability } from '../monster';

@Component({
  selector: 'top-stats',
  templateUrl: './top-stats.component.html',
  styleUrls: ['./top-stats.component.css']
})
export class TopStatsComponent implements OnInit {
  @Input() armor_class: number;
  @Input() hit_points: number;
  private _hit_dice: string;
  private hp_mod: number;
  @Input() speed: string;

  private _abilityScores: AbilityScore[];

  // input with getter/setter declared below
  private static readonly savingLabels: string[] = [
    'Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'
  ];
  private saves: string;

  // input with getter/setter declared below
  private static readonly skillLabels: string[] = [
    'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception',
    'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature',
    'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand',
    'Stealth', 'Survival'
  ];
  private skills: string;

  @Input() damage_vulnerabilities: string;
  @Input() damage_resistances: string;
  @Input() damage_immunities: string;
  @Input() condition_immunities: string;
  @Input() senses: string;
  @Input() languages: string;

  // input with getter/setter declared below
  private _challenge_rating: string;
  private static readonly xpByCr: number[] = [
    0, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900,
    7200, 8400, 10000, 11500, 13000, 15000, 18000, 20000, 22000, 25000,
    33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
  ];
  private xp: number;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set hit_dice(hit_dice: string) {
    this._hit_dice = hit_dice;
    this.calculateHpMod();
  }
  get hit_dice(): string { return this._hit_dice; }

  @Input()
  set abilityScores(abilityScores: AbilityScore[]) {
    this._abilityScores = abilityScores;
    this.calculateHpMod();
  }
  get abilityScores(): AbilityScore[] { return this._abilityScores; }

  @Input()
  set savingThrows(savingThrows: number[]) {
    this.saves = this.getCommaSeparated(savingThrows,
      TopStatsComponent.savingLabels);
  }

  @Input()
  set skillModifiers(skillModifiers: number[]) {
    this.skills = this.getCommaSeparated(skillModifiers,
      TopStatsComponent.skillLabels);
  }

  @Input()
  set challenge_rating(challenge_rating: string) {
    this._challenge_rating = challenge_rating;
    if (challenge_rating != null) {
      this.xp = this.getXp(challenge_rating);
    }
  }
  get challenge_rating(): string { return this._challenge_rating; }

  private calculateHpMod() {
    if (this.hit_dice && this.abilityScores) {
      let index = this.hit_dice.indexOf('d');
      let numDice = this.hit_dice.substring(0, index);
      this.hp_mod = Number(numDice) * this.abilityScores[Ability.CON].mod;
    }
  }

  private formatModifier(modifier: number): string {
    if(modifier >= 0) {
      return '+' + modifier;
    } else {
      return '' + modifier;
    }
  }

  private getCommaSeparated(modifiers: number[], labels: string[]): string {
    let line = '';
    for (let i = 0; i < modifiers.length; i++) {
      let mod = modifiers[i];
      if (mod != null) {
        if (line.length > 0) {
          // add separator
          line += ', ';
        }
        line += labels[i] + ' ' + this.formatModifier(mod);
      }
    }
    return line;
  }

  private getXp(challenge_rating: string): number {
    let xp: number;
    // check if this is a fraction of 1 CR
    let index = challenge_rating.indexOf('/');
    if (index >= 0) {
      let fraction = challenge_rating.slice(index + 1);
      xp = TopStatsComponent.xpByCr[1] / Number(fraction);
    } else {
      xp = TopStatsComponent.xpByCr[Number(challenge_rating)];
    }
    return xp;
  }

}

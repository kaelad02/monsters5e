export class Monster {
  name: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: string;

  abilityScores: AbilityScores;

  savingThrows: SavingThrows;

  skillModifiers: [string, number][];

  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;

  special_abilities: SpecialAbility[];

  actions: Action[];

  legendary_actions: Action[];
}

export class AbilityScores {
  private scores: number[];

  constructor(str: number, dex: number, con: number, int: number, wis: number,
    cha: number) {
    this.scores = [ str, dex, con, int, wis, cha ];
  }

  getScore(ability: Ability): number {
    return this.scores[ability];
  }

  getModifier(ability: Ability): number {
    let mod = this.scores[ability];
    mod = (mod - 10) / 2;
    mod = Math.floor(mod);
    return mod;
  }
}

export class SavingThrows {
  private mod: number[];

  constructor(str: number, dex: number, con: number, int: number, wis: number,
    cha: number) {
    this.mod = [ str, dex, con, int, wis, cha ];
  }

  getModifier(ability: Ability): number {
    return this.mod[ability];
  }
}

enum Ability {
  STR, DEX, CON, INT, WIS, CHA
}

export class SpecialAbility {
  name: string;
  desc: string;
}

export class Action extends SpecialAbility {
  attack_bonus: number;
  damage_dice: string;
  damage_bonus: number;
}

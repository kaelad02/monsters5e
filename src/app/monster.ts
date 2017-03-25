export abstract class AbstractMonster {
  name: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: string;

  // abilityScores: AbilityScores;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  // savingThrows: SavingThrows;
  strength_save?: number;
  dexterity_save?: number;
  constitution_save?: number;
  intelligence_save?: number;
  wisdom_save?: number;
  charisma_save?: number;

  // skillModifiers: [string, number][];
  acrobatics?: number;
  animal_handling?: number;
  arcana?: number;
  athletics?: number;
  deception?: number;
  history?: number;
  insight?: number;
  intimidation?: number;
  investigation?: number;
  medicine?: number;
  nature?: number;
  perception?: number;
  performance?: number;
  persuasion?: number;
  religion?: number;
  sleight_of_hand?: number;
  stealth?: number;
  survival?: number;

  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;

  special_abilities: SpecialAbility[];

  actions: Action[];

  reactions?: Action[];

  legendary_actions?: Action[];

}

export class Monster extends AbstractMonster {

  constructor(source: AbstractMonster) {
    super();
    for (let prop in source) {
      this[prop] = source[prop];
    }
  }

  getAbilityScores(): AbilityScore[] {
    return [
      new AbilityScore(this.strength),
      new AbilityScore(this.dexterity),
      new AbilityScore(this.constitution),
      new AbilityScore(this.intelligence),
      new AbilityScore(this.wisdom),
      new AbilityScore(this.charisma)
    ];
  }

  getSavingThrows(): number[] {
    return [ this.strength_save, this.dexterity_save,
      this.constitution_save, this.intelligence_save, this.wisdom_save,
      this.charisma_save ];
  }

  getSkillModifiers(): number[] {
    return [
      this.acrobatics, this.animal_handling, this.arcana, this.athletics,
      this.deception, this.history, this.insight, this.intimidation,
      this.investigation, this.medicine, this.nature, this.perception,
      this.performance, this.persuasion, this.religion, this.sleight_of_hand,
      this.stealth, this.survival
    ];
  }
}

export class AbilityScore {
  public readonly mod: number;

  constructor(public readonly score: number) {
    this.mod = this.getModifier();
  }

  private getModifier(): number {
    let mod = (this.score - 10) / 2;
    mod = Math.floor(mod);
    return mod;
  }
}

export enum Ability {
  STR, DEX, CON, INT, WIS, CHA
}

export class SpecialAbility {
  name: string;
  desc: string;
  attack_bonus: number;
}

export class Action extends SpecialAbility {
  damage_dice?: string;
  damage_bonus?: number;
}
